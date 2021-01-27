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

var shortStoryBtn = document.getElementById('short-story-button');
var longStoryBtn = document.getElementById('long-story-button');
var eng2ShortStoryCopy = document.getElementById('eng-2-short-story');
var eng2LongStoryCopy = document.getElementById('eng-2-long-story');
var eng1ShortStoryCopy = document.getElementById('eng-1-short-story');
var eng1LongStoryCopy = document.getElementById('eng-1-long-story');
var intEngShortStoryCopy = document.getElementById('int-eng-short-story');
var intEngLongStoryCopy = document.getElementById('int-eng-long-story');
var custOpsShortStoryCopy = document.getElementById('cust-ops-short-story');
var custOpsLongStoryCopy = document.getElementById('cust-ops-long-story');
var ceoShortStoryCopy = document.getElementById('ceo-short-story');
var ceoLongStoryCopy = document.getElementById('ceo-long-story');

var showMeMoreBtn1 = document.getElementById('show-me-more-1');
var showMeMoreBtn2 = document.getElementById('show-me-more-2');
var showMeMoreBtn3 = document.getElementById('show-me-more-3');
var project1 = document.getElementById('project-1');
var project2 = document.getElementById('project-2');
var project3 = document.getElementById('project-3');
var project4 = document.getElementById('project-4');
var project5 = document.getElementById('project-5');
var project6 = document.getElementById('project-6');
var project7 = document.getElementById('project-7');
var project8 = document.getElementById('project-8');

showMeMoreBtn1.onclick = function() {
  if (project1.hasAttribute('class', 'visible') && project2.hasAttribute('class', 'visible')) {
    if (project3.hasAttribute('class', 'hidden') && project4.hasAttribute('class', 'hidden')) {
      project3.setAttribute('class', 'projects-item visible');
      project4.setAttribute('class', 'projects-item visible');
      showMeMoreBtn1.setAttribute('class', 'hidden');
      showMeMoreBtn2.setAttribute('class', 'more-projects-btn visible');
    }
  } 
}

showMeMoreBtn2.onclick = function() {
  if (project3.hasAttribute('class', 'visible') && project4.hasAttribute('class', 'visible')) {
    if (project5.hasAttribute('class', 'hidden') && project6.hasAttribute('class', 'hidden')) {
      project5.setAttribute('class', 'projects-item visible');
      project6.setAttribute('class', 'projects-item visible');
      showMeMoreBtn2.setAttribute('class', 'hidden');
      showMeMoreBtn3.setAttribute('class', 'more-projects-btn visible');
    }
  } 
}

showMeMoreBtn3.onclick = function() {
  if (project5.hasAttribute('class', 'visible') && project6.hasAttribute('class', 'visible')) {
    if (project7.hasAttribute('class', 'hidden') && project8.hasAttribute('class', 'hidden')) {
      project7.setAttribute('class', 'projects-item visible');
      project8.setAttribute('class', 'projects-item visible');
      showMeMoreBtn3.setAttribute('class', 'hidden');
    }
  } 
}

longStoryBtn.onclick = function() {
  if (eng2ShortStoryCopy.hasAttribute('class', 'visible')) {
    longStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
    shortStoryBtn.setAttribute('class', 'exp-2-btn');
    eng2ShortStoryCopy.setAttribute('class', 'hidden');
    eng2LongStoryCopy.setAttribute('class', 'visible');
  }
}

shortStoryBtn.onclick = function() {
  if (eng2LongStoryCopy.hasAttribute('class', 'visible')) {
    longStoryBtn.setAttribute('class', 'exp-2-btn');
    shortStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
    eng2ShortStoryCopy.setAttribute('class', 'visible');
    eng2LongStoryCopy.setAttribute('class', 'hidden');
  }
}

// lol. this is gonna be get better i promise.
eng2Btn.onclick = function() {
  eng2Btn.setAttribute('class', 'exp-btn exp-btn-active');
  eng1Btn.setAttribute('class', 'exp-btn');
  intEngBtn.setAttribute('class', 'exp-btn');
  custOpsBtn.setAttribute('class', 'exp-btn');
  ceoBtn.setAttribute('class', 'exp-btn');
  eng2Div.setAttribute('class', 'visible');
  eng1Div.setAttribute('class', 'hidden');
  intEngDiv.setAttribute('class', 'hidden');
  custOpsDiv.setAttribute('class', 'hidden');
  ceoDiv.setAttribute('class', 'hidden');

  longStoryBtn.onclick = function() {
    longStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
    shortStoryBtn.setAttribute('class', 'exp-2-btn');
    eng2LongStoryCopy.setAttribute('class', 'visible');
    eng2ShortStoryCopy.setAttribute('class', 'hidden');
  }

  shortStoryBtn.onclick = function() {
    longStoryBtn.setAttribute('class', 'exp-2-btn');
    shortStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
    eng2LongStoryCopy.setAttribute('class', 'hidden');
    eng2ShortStoryCopy.setAttribute('class', 'visible');
  }
};

eng1Btn.onclick = function() {
  eng2Btn.setAttribute('class', 'exp-btn');
  eng1Btn.setAttribute('class', 'exp-btn exp-btn-active');
  intEngBtn.setAttribute('class', 'exp-btn');
  custOpsBtn.setAttribute('class', 'exp-btn');
  ceoBtn.setAttribute('class', 'exp-btn');
  eng2Div.setAttribute('class', 'hidden');
  eng1Div.setAttribute('class', 'visible');
  intEngDiv.setAttribute('class', 'hidden');
  custOpsDiv.setAttribute('class', 'hidden');
  ceoDiv.setAttribute('class', 'hidden');
  longStoryBtn.setAttribute('class', 'exp-2-btn');
  shortStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
  eng1ShortStoryCopy.setAttribute('class', 'visible');

  longStoryBtn.onclick = function() {
    longStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
    shortStoryBtn.setAttribute('class', 'exp-2-btn');
    eng1LongStoryCopy.setAttribute('class', 'visible');
    eng1ShortStoryCopy.setAttribute('class', 'hidden');
  }

  shortStoryBtn.onclick = function() {
    longStoryBtn.setAttribute('class', 'exp-2-btn');
    shortStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
    eng1LongStoryCopy.setAttribute('class', 'hidden');
    eng1ShortStoryCopy.setAttribute('class', 'visible');
  }
};

intEngBtn.onclick = function() {
  eng2Btn.setAttribute('class', 'exp-btn');
  eng1Btn.setAttribute('class', 'exp-btn');
  intEngBtn.setAttribute('class', 'exp-btn exp-btn-active');
  custOpsBtn.setAttribute('class', 'exp-btn');
  ceoBtn.setAttribute('class', 'exp-btn');
  eng2Div.setAttribute('class', 'hidden');
  eng1Div.setAttribute('class', 'hidden');
  intEngDiv.setAttribute('class', 'visible');
  custOpsDiv.setAttribute('class', 'hidden');
  ceoDiv.setAttribute('class', 'hidden');
  longStoryBtn.setAttribute('class', 'exp-2-btn');
  shortStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
  intEngShortStoryCopy.setAttribute('class', 'visible');

  longStoryBtn.onclick = function() {
    longStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
    shortStoryBtn.setAttribute('class', 'exp-2-btn');
    intEngLongStoryCopy.setAttribute('class', 'visible');
    intEngShortStoryCopy.setAttribute('class', 'hidden');
  }

  shortStoryBtn.onclick = function() {
    longStoryBtn.setAttribute('class', 'exp-2-btn');
    shortStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
    intEngLongStoryCopy.setAttribute('class', 'hidden');
    intEngShortStoryCopy.setAttribute('class', 'visible');
  }
};

custOpsBtn.onclick = function() {
  eng2Btn.setAttribute('class', 'exp-btn');
  eng1Btn.setAttribute('class', 'exp-btn');
  intEngBtn.setAttribute('class', 'exp-btn');
  custOpsBtn.setAttribute('class', 'exp-btn exp-btn-active');
  ceoBtn.setAttribute('class', 'exp-btn');
  eng2Div.setAttribute('class', 'hidden');
  eng1Div.setAttribute('class', 'hidden');
  intEngDiv.setAttribute('class', 'hidden');
  custOpsDiv.setAttribute('class', 'visible');
  ceoDiv.setAttribute('class', 'hidden');
  longStoryBtn.setAttribute('class', 'exp-2-btn');
  shortStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
  custOpsShortStoryCopy.setAttribute('class', 'visible');

  longStoryBtn.onclick = function() {
    longStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
    shortStoryBtn.setAttribute('class', 'exp-2-btn');
    custOpsLongStoryCopy.setAttribute('class', 'visible');
    custOpsShortStoryCopy.setAttribute('class', 'hidden');
  }

  shortStoryBtn.onclick = function() {
    longStoryBtn.setAttribute('class', 'exp-2-btn');
    shortStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
    custOpsLongStoryCopy.setAttribute('class', 'hidden');
    custOpsShortStoryCopy.setAttribute('class', 'visible');
  }
};

ceoBtn.onclick = function() {
  eng2Btn.setAttribute('class', 'exp-btn');
  eng1Btn.setAttribute('class', 'exp-btn');
  intEngBtn.setAttribute('class', 'exp-btn');
  custOpsBtn.setAttribute('class', 'exp-btn');
  ceoBtn.setAttribute('class', 'exp-btn exp-btn-active');
  eng2Div.setAttribute('class', 'hidden');
  eng1Div.setAttribute('class', 'hidden');
  intEngDiv.setAttribute('class', 'hidden');
  custOpsDiv.setAttribute('class', 'hidden');
  ceoDiv.setAttribute('class', 'visible');
  longStoryBtn.setAttribute('class', 'exp-2-btn');
  shortStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
  ceoShortStoryCopy.setAttribute('class', 'visible');

  longStoryBtn.onclick = function() {
    longStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
    shortStoryBtn.setAttribute('class', 'exp-2-btn');
    ceoLongStoryCopy.setAttribute('class', 'visible');
    ceoShortStoryCopy.setAttribute('class', 'hidden');
  }

  shortStoryBtn.onclick = function() {
    longStoryBtn.setAttribute('class', 'exp-2-btn');
    shortStoryBtn.setAttribute('class', 'exp-2-btn exp-2-btn-active');
    ceoLongStoryCopy.setAttribute('class', 'hidden');
    ceoShortStoryCopy.setAttribute('class', 'visible');
  }
};
