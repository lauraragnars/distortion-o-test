"use strict";

document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  document.querySelectorAll(".pin").forEach((pin) => {
    pin.addEventListener("click", clickOpenPopUp);
    pin.addEventListener("mouseover", openPopUp);

    pin.addEventListener("mouseleave", closePopUp);
  });

  document.querySelector(".close").addEventListener("click", closePopUp);
}

function openPopUp(event) {
  console.log(this.dataset.info, "hover");
  document.querySelector(".popup .info").textContent = this.dataset.info;
  document.querySelector(".popup .title").textContent = this.dataset.title;

  const x = event.pageX - 10;
  const y = event.pageY - 10;

  const popup = document.querySelector(".popup");
  popup.classList.remove("hide");
  popup.style.left = x + "px";
  popup.style.top = y + "px";
}

function closePopUp() {
  const popup = document.querySelector(".popup");
  popup.classList.add("hide");
}

function clickOpenPopUp(event) {
  console.log("click");
  const popup = document.querySelector(".popup");
  popup.classList.add("hide");

  document.querySelector(".popup .info").textContent = this.dataset.info;
  document.querySelector(".popup .title").textContent = this.dataset.title;

  const x = event.pageX - 10;
  const y = event.pageY - 10;

  popup.style.left = x + "px";
  popup.style.top = y + "px";

  popup.classList.remove("hide");
}
