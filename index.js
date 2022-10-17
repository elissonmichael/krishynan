document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit(); // Initialize all of the Materialize Components
});

function lciValue() {
  return document.querySelector('input[id="lci"]').value;
}

function cdbValue() {
  return document.querySelector('input[id="cdb"]').value;
}

function aliquot() {
  return document.querySelector('input[name="aliquot"]:checked').value;
}

function calculateLCI() {
  return cdbValue() / (1.0 - aliquot());
}

function calculateCDB() {
  return lciValue() * (1.0 - aliquot());
}

function updateAll() {
  cdbResult.value = `${calculateLCI().toFixed(2)}%`;
  lciResult.value = `${calculateCDB().toFixed(2)}%`;
  lci.value = calculateCDB();
  cdb.value = calculateLCI();
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
