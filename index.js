//javascript tab personal information section

function openTab(infoTab) {
  var i;
  var x = document.getElementsByClassName("info-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(infoTab).style.display = "block";
}

//// skill bar section

let percentNode = document.getElementById("percent-node");
let countNode = 0;
setInterval(() => {
  if (countNode === 70) {
    clearInterval();
  } else {
    countNode += 1;
    percentNode.innerHTML = countNode + "%";
  }
}, 27);

let percentMongo = document.getElementById("percent-mongo");
let countMongo = 0;
setInterval(() => {
  if (countMongo === 65) {
    clearInterval();
  } else {
    countMongo += 1;
    percentMongo.innerHTML = countMongo + "%";
  }
}, 29);

let percentTeam = document.getElementById("percent-team");
let countTeam = 0;
setInterval(() => {
  if (countTeam === 85) {
    clearInterval();
  } else {
    countTeam += 1;
    percentTeam.innerHTML = countTeam + "%";
  }
}, 23);

////popup form email ---contact section

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
/////login button

function openNew() {
  alert("login succeeded");
}
