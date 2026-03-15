/* Sunday School Activities — Shared Utilities */
const SSA = {
  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  showFeedback(el, correct, message, duration = 2500) {
    el.textContent = message;
    el.className = 'feedback ' + (correct ? 'correct' : 'incorrect');
    el.style.display = 'block';
    if (duration > 0) {
      setTimeout(() => { el.style.display = 'none'; }, duration);
    }
  },

  updateProgress(barEl, current, total) {
    const pct = Math.round((current / total) * 100);
    barEl.querySelector('.fill').style.width = pct + '%';
  }
};
