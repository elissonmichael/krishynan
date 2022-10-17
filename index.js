function aliquot() {
  return document.querySelector('input[name="aliquot"]:checked').value;
}

function resetAll() {
  let default_cdb = 80.0;
  cdbResult.value = `${default_cdb}%`;
  cdb.value = default_cdb;
  let default_lci = default_cdb * (1.0 - aliquot());
  lciResult.value = `${default_lci.toFixed(2)}%`;
  lci.value = default_lci;
}

function updateCDB(element) {
  lciResult.value = `${element.value}%`;
  const result = element.value / (1.0 - aliquot());
  cdb.value = result;
  cdbResult.value = `${result.toFixed(2)}%`;
}

function updateLCI(element) {
  cdbResult.value = `${element.value}%`;
  const result = element.value * (1.0 - aliquot());
  lci.value = result;
  lciResult.value = `${result.toFixed(2)}%`;
}
