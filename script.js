"use strict";
// require("dotenv").config();

const Scroll = document.querySelector("#Events-Section");
const ScrollEvents = document.querySelector("#Events");

const ResourceTypeHackathon = document.querySelector(
  "#Resource-Type-Hackathon"
);

const ResourcesLinkHackathon = document.querySelector("#Hackathons-Link-List");
const ResourcesLinkCoding = document.querySelector("#Coding-Link-List");

const ArrowHacathons = document.querySelector("#Arrow-Id-Hackathons");
const ArrowCoding = document.querySelector("#Arrow-Id-Coding");

const HackathonImage = document.querySelector("#Hackathon");
const CodingImage = document.querySelector("#Coding");

ScrollEvents.addEventListener("click", function () {
  Scroll.scrollIntoView({ behavior: "smooth" });
});

const SearchInput = document.querySelector(".search-input");
const SearchButton = document.querySelector(".search");

const generateText = async () => {
  const url = ``;
  const response = await fetch(url, {
  });

  const json = await response.json();
  console.log(json);
}


// function websiteVisits(response) {
//   document.querySelector("#visits").textContent = response.value;
// }

// SearchButton.addEventListener("click", function () {
  // const PromptGiven = SearchInput.value;
//   const generateText = async (question) => {
//     const apiKey = "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";
//     const url = `https://api.openai.com/v1/engines/text-davinci-003/completions`;
//     const requestBody = {
//       prompt: question,
//       temperature: 0.9,
//       max_tokens: 500,
//     };

//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`,
//       },
//       body: JSON.stringify(requestBody),
//     });

//     const json = await response.json();
//     const generatedText = json.choices[0].text;

//     var string = `${generatedText}`;
//     var str = string.split("");
//     var el = document.getElementById("str");
//     (function animate() {
//       str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
//       var running = setTimeout(animate, 30);
//     })();
//   };
//   generateText(`${PromptGiven}`);
// });

// console.log(process.env.apiKey);





