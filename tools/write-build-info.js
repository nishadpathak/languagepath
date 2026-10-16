#!/usr/bin/env node
/* Post-build: dist/build.json with commit sha, branch and build time so a deploy can be matched to GitHub. */
"use strict";
const fs = require("fs"), path = require("path"), { execSync } = require("child_process");
const git = c => { try { return execSync("git " + c, { cwd: path.join(__dirname, "..") }).toString().trim(); } catch (e) { return ""; } };
const info = { commit: process.env.COMMIT_REF || git("rev-parse HEAD"), branch: process.env.BRANCH || git("rev-parse --abbrev-ref HEAD"), builtAt: new Date().toISOString() };
fs.writeFileSync(path.join(__dirname, "..", "dist", "build.json"), JSON.stringify(info, null, 2) + "\n");
console.log("build.json", info);
