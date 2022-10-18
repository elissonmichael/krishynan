function aliquot() {
  return document.querySelector('input[name="aliquot"]:checked').value;
}

function queryLciValue() {
  return document.getElementById('lci').value;
}

function lciCalculation(cdbValue) {
  return cdbValue / (1.0 - aliquot());
}

function cdbCalculation(lciValue) {
  return lciValue * (1.0 - aliquot());
}

function toolTips(id) {
  return document.getElementById(id).getElementsByClassName('thumb active');
}

function hideTooltipFrom(id) {
  if (toolTips(id).length > 0) { toolTips(id)[0].hidden = true };
}

function showTooltipFrom(id) {
  if (toolTips(id).length > 0) { toolTips(id)[0].hidden = false };
}

function recalculateCDB() {
  cdb.value = lciCalculation(queryLciValue());
  cdbResult.value = `${cdb.value}%`;
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
