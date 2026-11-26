#!/usr/bin/env node
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const app = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(m => m[1].includes('LESSON SCRIPTS'))[1];
new vm.Script(app); // parser check against the actual app, not a copy
assert.equal((html.match(/id="heroDemo"/g)||[]).length,1);
assert.ok(html.indexOf('id="heroDemo"')<html.indexOf('class="starter-options"'));
assert.ok(html.indexOf('id="homeResume"')<html.indexOf('id="heroDemo"'));
assert.match(html, /<details class="starter-options">\s*<summary>/);
assert.match(html, /<bdi[^>]*id="demoAnswer"[^>]*dir="auto"/);
assert.match(html, /id="demoA"[^>]*aria-label="Answer and explanation"[^>]*tabindex="-1"[^>]*hidden/);
assert.match(html, /\.starter \.btn[^\n{}]*\{min-height:44px\}/);
assert.doesNotMatch(html.slice(html.indexOf('id="heroDemo"'),html.indexOf('class="starter-options"')),/<(?:input|form)\b/);
function between(a,b){
  const start=app.indexOf(a), end=app.indexOf(b,start+1);
  assert.ok(start>=0&&end>start,[a,b]);
  return app.slice(start,end);
}
const ids = ['heroDemo','demoWant','demoCoffee','demoAnswer','demoWantPr','demoItemPr','demoA','demoWhy','demoStartBtn','demoTitle','demoPrompt','demoLead','demoItem','demoNextBtn','demoRevealBtn','homeResume','homeResumeBtn','homeResumeNote','player','lessonHome'];
const attrs={};
let focus;
const dom=Object.fromEntries(ids.map(id=>[id,{
  hidden:false,textContent:'',style:{},
  setAttribute(k,v){attrs[id+'-'+k]=v;},
  focus(){focus=id;},
  classList:{toggle(){}}
}]));
let opened=[];
const scenario={
  document:{getElementById:id=>dom[id]},
  PACKS:{
    mandarin:{name:'Mandarin'},arabic:{name:'Arabic'},spanish:{name:'Spanish'},
    tr:{name:'Turkish',_lazy:true},vietnamese:{name:'Vietnamese'}, german:{name:'German'}
  },
  CONTENT_REV:{tr:2,german:2},
  LANG_ORDER:['mandarin','spanish','tr','german'],
  MASTER:{}, state:{done:[]}, activeLang:'mandarin',
  LESSONS:[{id:1,steps:[{},{}]},{id:2,steps:[{},{},{}]}],
  track:(...args)=>opened.push(args),
  go:v=>opened.push(['view',v]),
  window:{scrollTo(){}},renderPlayer(){},
  activateLang(lang,done){opened.push(['load',lang]);scenario.PACKS[lang]._lazy=false;done();}
};
vm.createContext(scenario);
vm.runInContext(between('const DEMO=', 'function lpPop('),scenario);
vm.runInContext(between('function resumeLessonChoice()', '/* ============ LESSON LIST'),scenario);
vm.runInContext(between('let curL=null,sIdx=0,revealed={},stepScore={};', 'function exitPlayer()'),scenario);
const run=script=>vm.runInContext(script,scenario);
const value=id=>dom[id].textContent;
run('setDemo(activeLang);renderHomeContinue()');
assert.match(value('demoPrompt'),/I want coffee/);
assert.equal(value('demoWant'),'我要');
assert.equal(dom.demoA.hidden,true);
assert.equal(dom.homeResume.hidden,true);
assert.equal(value('demoStartBtn'),'Skip to Mandarin lessons');
run('demoReveal()');
assert.equal(value('demoAnswer'),'我要咖啡。');
assert.match(value('demoWhy'),/directly after/);
assert.equal(dom.demoNextBtn.hidden,false);
assert.equal(focus,'demoA');
run('demoNext()');
assert.match(value('demoPrompt'),/I want tea/);
assert.equal(value('demoCoffee'),'茶');
assert.equal(dom.demoA.hidden,true);
assert.equal(value('demoAnswer'),'');
assert.equal(focus,'demoPrompt');
run('demoReveal()');
assert.equal(value('demoAnswer'),'我要茶。');
assert.equal(dom.demoNextBtn.hidden,true);
assert.equal(value('demoStartBtn'),'Continue to Mandarin lessons');
assert.deepEqual(opened,[],'home demo itself never logs events or opens a lesson');
assert.deepEqual(scenario.MASTER,{});
run('resumeOrStart(true)');
assert.equal(run('curL.id'),1);
assert.equal(run('sIdx'),0);
assert.equal(focus,'player');

scenario.activeLang='arabic';
run('setDemo(activeLang);demoReveal()');
assert.equal(attrs['demoAnswer-lang'],'ar');
assert.equal(value('demoAnswer'),'أريد قهوة.');
scenario.activeLang='tr';
run('setDemo(activeLang);demoReveal()');
assert.match(value('demoWhy'),/drink comes first/);
assert.equal(value('demoAnswer'),'Bir kahve istiyorum.');
scenario.activeLang='vietnamese';
run('setDemo(activeLang);demoReveal()');
assert.match(value('demoLead'),/Spanish/,'honest fallback language name');
assert.equal(attrs['demoAnswer-lang'],'es');
assert.equal(value('demoStartBtn'),'Start Vietnamese lessons','fallback must not change the chosen course');

scenario.activeLang='spanish';
scenario.state={done:[],pos:{lesson:2,step:2},contentRev:1};
scenario.MASTER={spanish:scenario.state,german:{done:[1],contentRev:1},__meta:{lessonLang:'spanish'}};
assert.equal(run('lastWorkedLanguage()'),'spanish');
run('renderHomeContinue();resumeOrStart(true)');
assert.equal(dom.homeResume.hidden,false);
assert.equal(value('homeResumeBtn'),'Continue Spanish');
assert.match(value('homeResumeNote'),/^Lesson 2/);
assert.equal(run('curL.id'),2);
assert.equal(run('sIdx'),2);
run('savePos()');
assert.equal(scenario.MASTER.__meta.lessonLang,'spanish');
scenario.state.pos.step=-1;
assert.equal(run('resumeLessonChoice().id'),1);
scenario.state.done=[1,2];
assert.equal(run('resumeLessonChoice().id'),2);
scenario.activeLang='tr';
scenario.state={done:[1],pos:{lesson:2,step:1}};
run('resumeOrStart(true)');
assert.ok(opened.some(a=>a[0]==='load'&&a[1]==='tr'));
assert.equal(run('sIdx'),1);
console.log('First minute: selected/fallback language, locale tags, explained answer, real variation, focus, private resume and lazy course passed.');
