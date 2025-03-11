function formatMoney(value) {
  value = Math.ceil(value * 100) / 100;
  value = value.toFixed(2).toString().replace(".", ",");
  return "R$" + value;
}

function formatSplit(value) {
  if (value == 1) {
    return value + " pessoa";
  } else {
    return value + " pessoas";
  }
}

function update() {
  let yourBill = Number(document.getElementById("yourBill").value);
  let TipPercent = Number(document.getElementById("tipInput").value);
  let split = Number(document.getElementById("splitInput").value);

  let tipValue = (yourBill * TipPercent) / 100;
  let billTotal = yourBill + tipValue;
  let billEach = billTotal / split;

  document.getElementById("tipPercent").innerHTML = TipPercent.toFixed(2) + "%";
  document.getElementById("tipValue").innerHTML = "R$" + tipValue.toFixed(2);
  document.getElementById("totalWithTip").innerHTML =
    "R$" + billTotal.toFixed(2);
  document.getElementById("billEach").innerHTML = "R$" + billEach.toFixed(2);
}

function updateSplitValue() {
  let split = document.getElementById("splitInput").value;
  document.getElementById("splitValue").innerHTML = formatSplit(split);
  update();
}
