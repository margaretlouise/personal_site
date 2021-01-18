var eng2Btn = document.getElementById('eng-2-button');
var eng1Btn = document.getElementById('eng-1-button');
var intEngBtn = document.getElementById('int-eng-button');
var custOpsBtn = document.getElementById('cust-ops-button');
var ceoBtn = document.getElementById('ceo-button');

var eng2Div = document.getElementById('eng-2-blurb');
var eng1Div = document.getElementById('eng-1-blurb');
var intEngDiv = document.getElementById('int-eng-blurb');
var custOpsDiv = document.getElementById('cust-ops-blurb');
var ceoDiv = document.getElementById('ceo-blurb');

eng2Btn.onclick = function() {
  eng2Btn.setAttribute('class', 'exp-btn active');
  eng1Btn.setAttribute('class', 'exp-btn');
  intEngBtn.setAttribute('class', 'exp-btn');
  custOpsBtn.setAttribute('class', 'exp-btn');
  ceoBtn.setAttribute('class', 'exp-btn');
  eng2Div.setAttribute('class', 'visible');
  eng1Div.setAttribute('class', 'hidden');
  intEngDiv.setAttribute('class', 'hidden');
  custOpsDiv.setAttribute('class', 'hidden');
  ceoDiv.setAttribute('class', 'hidden');
};

eng1Btn.onclick = function() {
  eng2Btn.setAttribute('class', 'exp-btn');
  eng1Btn.setAttribute('class', 'exp-btn active');
  intEngBtn.setAttribute('class', 'exp-btn');
  custOpsBtn.setAttribute('class', 'exp-btn');
  ceoBtn.setAttribute('class', 'exp-btn');
  eng2Div.setAttribute('class', 'hidden');
  eng1Div.setAttribute('class', 'visible');
  intEngDiv.setAttribute('class', 'hidden');
  custOpsDiv.setAttribute('class', 'hidden');
  ceoDiv.setAttribute('class', 'hidden');
};

intEngBtn.onclick = function() {
  eng2Btn.setAttribute('class', 'exp-btn');
  eng1Btn.setAttribute('class', 'exp-btn');
  intEngBtn.setAttribute('class', 'exp-btn active');
  custOpsBtn.setAttribute('class', 'exp-btn');
  ceoBtn.setAttribute('class', 'exp-btn');
  eng2Div.setAttribute('class', 'hidden');
  eng1Div.setAttribute('class', 'hidden');
  intEngDiv.setAttribute('class', 'visible');
  custOpsDiv.setAttribute('class', 'hidden');
  ceoDiv.setAttribute('class', 'hidden');
};

custOpsBtn.onclick = function() {
  eng2Btn.setAttribute('class', 'exp-btn');
  eng1Btn.setAttribute('class', 'exp-btn');
  intEngBtn.setAttribute('class', 'exp-btn');
  custOpsBtn.setAttribute('class', 'exp-btn active');
  ceoBtn.setAttribute('class', 'exp-btn');
  eng2Div.setAttribute('class', 'hidden');
  eng1Div.setAttribute('class', 'hidden');
  intEngDiv.setAttribute('class', 'hidden');
  custOpsDiv.setAttribute('class', 'visible');
  ceoDiv.setAttribute('class', 'hidden');
};

ceoBtn.onclick = function() {
  eng2Btn.setAttribute('class', 'exp-btn');
  eng1Btn.setAttribute('class', 'exp-btn');
  intEngBtn.setAttribute('class', 'exp-btn');
  custOpsBtn.setAttribute('class', 'exp-btn');
  ceoBtn.setAttribute('class', 'exp-btn active');
  eng2Div.setAttribute('class', 'hidden');
  eng1Div.setAttribute('class', 'hidden');
  intEngDiv.setAttribute('class', 'hidden');
  custOpsDiv.setAttribute('class', 'hidden');
  ceoDiv.setAttribute('class', 'visible');
};

