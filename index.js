function aliquot() {
  return document.querySelector('input[name="aliquot"]:checked').value;
}

function lciCalculation(cdbValue) {
  return cdbValue / (1.0 - aliquot());
}

function cdbCalculation(lciValue) {
  return lciValue * (1.0 - aliquot());
}

function resetAll() {
  let default_cdb = 80.0;
  cdbResult.value = `${default_cdb}%`;
  cdb.value = default_cdb;
  lci.value = cdbCalculation(default_cdb);
  lciResult.value = `${lci.value}%`;
}

function updateCDB(element) {
  lciResult.value = `${element.value}%`;
  cdb.value = lciCalculation(element.value);
  cdbResult.value = `${cdb.value}%`;
}

function updateLCI(element) {
  cdbResult.value = `${element.value}%`;
  lci.value = cdbCalculation(element.value);
  lciResult.value = `${lci.value}%`;
}
