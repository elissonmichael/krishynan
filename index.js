function aliquot() {
  return document.querySelector('input[name="aliquot"]:checked').value;
}

function lciCalculation(cdbValue) {
  return cdbValue / (1.0 - aliquot());
}

function cdbCalculation(lciValue) {
  return lciValue * (1.0 - aliquot());
}

function hideTooltipFrom(id) {
  let elems = document.getElementById(id).getElementsByClassName('thumb active');
  if (elems.length === 0) { return };

  elems[0].hidden = true;
}

function showTooltipFrom(id) {
  let elems = document.getElementById(id).getElementsByClassName('thumb active');
  if (elems.length === 0) { return };

  elems[0].hidden = false;
}

function resetAll() {
  cdb.value = 80.0;
  lci.value = cdbCalculation(cdb.value);
  cdbResult.value = `${cdb.value}%`;
  lciResult.value = `${lci.value}%`;
  hideTooltipFrom('cdb-range-field');
  hideTooltipFrom('lci-range-field');
}

function updateCDB(element) {
  lciResult.value = `${element.value}%`;
  cdb.value = lciCalculation(element.value);
  cdbResult.value = `${cdb.value}%`;
  hideTooltipFrom('cdb-range-field')
  showTooltipFrom('lci-range-field')
}

function updateLCI(element) {
  cdbResult.value = `${element.value}%`;
  lci.value = cdbCalculation(element.value);
  lciResult.value = `${lci.value}%`;
  hideTooltipFrom('lci-range-field');
  showTooltipFrom('cdb-range-field');

}
