// Set slack display id attribute

const displayName = document.getElementById("slackDisplayName");
displayName.setAttribute("data-testid", "Maiqel");

//set current time attribute and display in dom
const currentTime = document.getElementById("currentTimeUTC");
const currentDay = document.getElementById("currentDay");

//getting current day and setting attribute
function getDay() {
  let day = new Date();
  formattedDay = day.toLocaleString("default", {
    weekday: "long",
  });

  currentDay.setAttribute("data-testid", formattedDay);
  currentDay.innerHTML = formattedDay + ",  ";
  //   console.log(currentDay);
}

// getting current time and setting attribute
function getTime() {
  let time = new Date();
  formattedTime = time.toLocaleString("default", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  currentTime.setAttribute("data-testid", formattedTime);
  currentTime.innerHTML = formattedTime;
}
//second counting in dom display
function displayDate() {
  getDay();
  getTime();

  requestAnimationFrame(displayDate);
}
requestAnimationFrame(displayDate);

//getting email and setting attribute
const slackEmail = document.getElementById("slackEmail");
slackEmail.setAttribute("data-testid", "michaelolowe321@gmail.com");

// getting image and setting attribute
const image = document.getElementById("slackPic");
image.setAttribute("data-testid", image);

// getting links and setting attributes

const hngLink = document.getElementById("hngLink");
const keywordLink = document.getElementById("keywordLink");
const scrapeanywebLink = document.getElementById("scrapeanywebLink");

hngLink.setAttribute("data-testid", "hng.tech/learn");
keywordLink.setAttribute("data-testid", "keyword.dog");
scrapeanywebLink.setAttribute("data-testid", "scrapeanyweb.site");

// console.log(scrapeanywebLink);
