function calculateLCI(element) {
  lciResult.value = `${element.value}%`;
  const result = element.value / (1.0-0.225);
  cdb.value = result;
  cdbResult.value = `${result.toFixed(2)}%`;
}

function calculateCDB(element) {
  cdbResult.value = `${element.value}%`;
  const result = element.value * (1.0-0.225);
  lci.value = result;
  lciResult.value = `${result.toFixed(2)}%`;
}
