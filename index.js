const W = require("lambert-w-function");
console.clear();
let a = 1.25,
  b = 2;
function CalculateRequiredXP(level) {
  return Math.round(a ** level * (level / b));
}

function CalculateLevelByXP(XP) {
  return Math.round(W.W(b * XP * Math.log(a)) / Math.log(a));
}

// console.log(CalculateRequiredXP(10));
// console.log(CalculateLevelByXP(CalculateRequiredXP(10)));

module.exports = { CalculateRequiredXP, CalculateLevelByXP };
