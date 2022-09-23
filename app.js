// https://www.omnicalculator.com/health/fev1-fvc-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const FEV1FVCRadio = document.getElementById('FEV1FVCRadio');
const FEV1Radio = document.getElementById('FEV1Radio');
const FVCRadio = document.getElementById('FVCRadio');

let FEV1FVC;
let FEV1 = v1;
let FVC = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

FEV1FVCRadio.addEventListener('click', function() {
  variable1.textContent = 'FEV1';
  variable2.textContent = 'FVC';
  FEV1 = v1;
  FVC = v2;
  result.textContent = '';
});

FEV1Radio.addEventListener('click', function() {
  variable1.textContent = 'FEV1/FVC';
  variable2.textContent = 'FVC';
  FEV1FVC = v1;
  FVC = v2;
  result.textContent = '';
});

FVCRadio.addEventListener('click', function() {
  variable1.textContent = 'FEV1/FVC';
  variable2.textContent = 'FEV1';
  FEV1FVC = v1;
  FEV1 = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(FEV1FVCRadio.checked)
    result.textContent = `FEV1/FVC = ${computeFEV1FVC().toFixed(2)}`;

  else if(FEV1Radio.checked)
    result.textContent = `FEV1 = ${computeFEV1().toFixed(2)}`;

  else if(FVCRadio.checked)
    result.textContent = `FVC = ${computeFVC().toFixed(2)}`;
})

// calculation

function computeFEV1FVC() {
  return (Number(FEV1.value) / Number(FVC.value)) * 100;
}

function computeFEV1() {
  return (Number(FEV1FVC.value) / 100) * Number(FVC.value);
}

function computeFVC() {
  return Number(FEV1.value) / (Number(FEV1FVC.value) / 100);
}