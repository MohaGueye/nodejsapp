function generateReport(name, scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return {
      name,
      average: 0,
      status: 'Fail'
    };
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = total / scores.length;
  const status = average >= 10 ? 'Pass' : 'Fail';

  return {
    name,
    average: Number(average.toFixed(2)),
    status
  };
}

module.exports = { generateReport };
