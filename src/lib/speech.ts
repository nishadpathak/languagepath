export function speakText(text: string, locale: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return false;
  const utterance = new SpeechSynthesisUtterance(text.replace(/[¿?.,!]/g, " "));
  utterance.lang = locale;
  const voices = window.speechSynthesis.getVoices();
  const match = voices.find((voice) => voice.lang.toLowerCase().startsWith(locale.slice(0, 2)));
  if (match) utterance.voice = match;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  return true;
}
