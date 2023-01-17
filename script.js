"use strict";

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

ResourceTypeHackathon.addEventListener("click", function () {
  ArrowHacathons.style.display = "flex";
  ArrowCoding.style.display = "none";
  ResourcesLinkHackathon.style.display = "flex";
  ResourcesLinkCoding.style.display = "none";
  HackathonImage.style.display = "flex";
  CodingImage.style.display = "none";
});

ScrollEvents.addEventListener("click", function () {
  Scroll.scrollIntoView({ behavior: "smooth" });
});
