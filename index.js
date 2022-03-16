const W = require("lambert-w-function");
console.clear();
let a = 1.5,
  b = 2;
function CalculateRequiredXP(level) {
  return Math.round(a ** level * (level / b));
}

function CalculateLevelByXP(XP) {
  return Math.round(W.W(b * XP * Math.log(a)) / Math.log(a));
}

module.exports = { CalculateRequiredXP, CalculateLevelByXP };
