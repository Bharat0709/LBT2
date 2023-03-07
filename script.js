"use strict";
const Scroll = document.querySelector("#Events-Section");
const ScrollEvents = document.querySelector("#Events");
const MagicSearch = document.querySelector(".MagicSearch");
const Answer = document.querySelector(".answer");
const Reload = document.querySelector(".Reload");
const SearchContainer = document.querySelector(".search-container2");
const SearchContainerFull = document.querySelector(".Searches");
const SearchInput = document.querySelector(".search-input");
const SearchButton = document.querySelector(".search");
const SearchInput2 = document.querySelector(".search-input2");
const SearchButton2 = document.querySelector(".search2");
const SearchAgain = document.querySelector("#search-again");
const SearchAgain2 = document.querySelector("#search-again2");
const APIResponse = document.querySelector("#str");
const Renderedurl = document.querySelector(".RenderedURL");
const Hamburger = document.querySelector(".Hamburger");
const SideMenu = document.querySelector("#SideMenuID");
const sideMenuItems = document.querySelector(".SideMenuItem");
const CheckBox = document.querySelector("#check");
const MagicSearchNav = document.querySelector("#MagicSearchSide-Menu");
Hamburger.addEventListener("click", function () {
  if (CheckBox.checked) {
    SideMenu.style.display = "flex";
  } else {
    SideMenu.style.display = "none";
  }
});

sideMenuItems.addEventListener("click", function () {
  SideMenu.style.display = "none";
});

MagicSearch.addEventListener("click", function () {
  SearchContainerFull.style.display = "flex";
});

MagicSearchNav.addEventListener("click", function () {
  SearchContainerFull.style.display = "flex";
  CheckBox.checked = false;
});

const RenderURl = function (data) {
  const html = `
  <a class="RenderedURL" href="${data.data[0].url}">Click Here To View</p>
    `;
  SearchContainer.insertAdjacentHTML("afterbegin", html);
  console.log(data.data[0].url);
};

ScrollEvents.addEventListener("click", function () {
  Scroll.scrollIntoView({ behavior: "smooth" });
});

SearchAgain.addEventListener("click", function () {
  SearchButton.style.display = "block";
  SearchAgain.style.display = "none";
  APIResponse.textContent = " ";
  Answer.style.display = "none";
});

SearchAgain2.addEventListener("click", function () {
  console.log(SearchInput2.value);
  SearchButton2.style.display = "block";
  SearchAgain2.style.display = "none";
  Renderedurl.style.display = "none";

  SearchInput2.style.display = "flex";
});

SearchButton.addEventListener("click", function () {
  alert("Sit Tight while we are generating your Answer");
  SearchButton.style.display = "none";
  const PromptGiven = SearchInput.value;
  SearchAgain.style.display = "flex";
  Answer.style.display = "flex";

  const generateText = async (question) => {
    const apiKey = "";
    const url = `https://api.openai.com/v1/engines/text-davinci-003/completions`;
    const requestBody = {
      prompt: question,
      temperature: 0.9,
      max_tokens: 1000,
    };

    if (SearchInput.value == "") {
      alert("Nothing to Search!!");
      Answer.style.display = "none";
    }
    SearchInput.value = "";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    const json = await response.json();
    const generatedText = json.choices[0].text;
    console.log(generateText);

    var string = `${generatedText}`;
    var str = string.split("");
    var el = document.getElementById("str");

    (function animate() {
      str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
      var running = setTimeout(animate, 30);
    })();
  };

  generateText(`${PromptGiven}`);
});

SearchButton2.addEventListener("click", function () {
  alert("Sit Tight while we are generating your Image");
  const PromptGiven2 = SearchInput2.value;
  async function generateImage(prompt) {
    const API_URL = "https://api.openai.com/v1/images/generations";
    const API_KEY = "";
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "image-alpha-001",
        prompt: prompt,
        num_images: 1,
      }),
    });
    const json = await response.json();
    console.log(json.data[0].url);
    RenderURl(json);
    console.log("rendering done");
  }

  // Example usage:
  generateImage(`${PromptGiven2}`)
    .then((url) => console.log(url))
    .catch((error) => console.error(error));

  SearchAgain2.style.display = "flex";
  SearchButton2.style.display = "none";
  SearchInput2.value = "";
});
