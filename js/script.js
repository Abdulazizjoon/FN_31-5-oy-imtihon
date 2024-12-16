import { createCard, err, nall } from "./function.js";
let input = document.querySelector(".search");
let btn = document.querySelector(".btn");
let darkinput = document.querySelector("#toggle");
let body = document.querySelector("body");
let select = document.querySelector("#select");
let main = document.querySelector(".main_container");
let h = document.querySelector("h1");
let li = document.querySelectorAll("li");
let moon = document.querySelector(".moon");
let wrapper_container = document.querySelector(".wrapper_container");

fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/keyboard`, {
  method: "GET",
})
  .then((response) => {
    if (response.status == 200) {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
    let card = createCard(data);
    wrapper_container.innerHTML = card;
    let bottom = document.querySelector(".bottom");
    let newaudio = document.querySelector(".newaudio");
    let sum;
    let audi = data[0].phonetics;
    audi.forEach((value) => {
      if (value.audio !== "") {
        console.log(value.audio);
        sum = value.audio;
        newaudio.setAttribute("src", sum);
      }
    });
    bottom.addEventListener("click", function () {
      newaudio.play();
    })
    let res= localStorage.getItem('kolor')
    if (res=='dark') {
      alert('dark')
      h.classList+=' dark'
    } else {
      alert('light')
    }
  })
  .catch((err) => {
    console.log(err);
  });
darkinput.addEventListener("click", function () {
  if (darkinput.checked) {
    body.classList.add("dark");
    select.style.backgroundColor = "#050505";
    select.style.color = "#fff";
    input.style.backgroundColor = "#1f1f1f";
    input.style.color = "#fff";
    main.style.backgroundColor = "#1f1f1f";
    btn.style.backgroundColor = "#1F1F1F";
    localStorage.setItem("kolor", "dark");

    if (h) {
      h.style.backgroundColor = "#050505";
      h.style.color = "#fff";
      h.classList.add("darc");
    }

    moon.style.color = "#A445ED";
    li.forEach((value) => {
      value.style.color = "#fff";
    });
  } else {
    body.classList.remove("dark");
    select.style.backgroundColor = "#fff";
    select.style.color = "#2D2D2D";
    input.style.backgroundColor = "#F4F4F4";
    input.style.color = "#2D2D2D";
    main.style.backgroundColor = "#fff";
    btn.style.backgroundColor = "#F4F4F4";
    if (h) {
      h.style.backgroundColor = "#fff";
      h.style.color = "#2D2D2D";
      h.classList.remove("darc");
      h.classList.add("ligh");
    }

    localStorage.setItem("kolor", "light");

    li.forEach((value) => {
      value.style.color = "#2D2D2D";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let res = localStorage.getItem("kolor");
  if (res == "dark") {
    body.classList.add("dark");
    darkinput.checked = true;
    select.style.backgroundColor = "#050505";
    select.style.color = "#fff";
    input.style.backgroundColor = "#1f1f1f";
    input.style.color = "#fff";
    main.style.backgroundColor = "#1f1f1f";

    if (h) {
      h.style.backgroundColor = "#050505";
      h.style.color = "#fff";
    }

    moon.style.color = "#A445ED";
    li.forEach((value) => {
      value.style.color = "#fff";
    });
  } else {
    body.classList.remove("dark");
    darkinput.checked = false;
  }
  let sum = localStorage.getItem("font");
  if (sum == "sanserif") {
    body.classList += " sanserif";
    if (h) {
      h.classList + " sanserif";
    }
  }
  if (sum == "serif") {
    body.classList += " serif";
    if (h) {
      h.classList += " serif";
    }
  }
  if (sum == "mono") {
    body.classList += " mono";
    if (h) {
      h.classList += " mono";
    }
  }
});

btn.addEventListener("click", function () {
  let sum = input.value;
  console.log(sum);
  if (input.value.length <= 0) {
    input.classList.add("red");
    input.style.outlineColor = "#FF5252";
    wrapper_container.innerHTML = nall();
    return;
  } else {
    input.classList.remove("red");
    input.style.outlineColor = "none";
  }
  if (sum.length < 2) {
    alert("Eng kamida 2ta soz yozilishi kerak!");
    return;
  }
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${sum}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
      if (response.status == 404) {
        wrapper_container.innerHTML = err();
      }
    })
    .then((data) => {
      console.log(data);
      let card = createCard(data);
      wrapper_container.innerHTML = card;

      let bottom = document.querySelector(".bottom");
      let newaudio = document.querySelector(".newaudio");
      let sum
        let audi = data[0].phonetics
        audi.forEach((value) => {
          if (value.audio !== "") {
            console.log(value.audio);
            sum = value.audio
            newaudio.setAttribute('src',sum)
          }

        })
      bottom.addEventListener('click',function() {
        newaudio.play()
      })
    })
    .catch((err) => {
      console.log(err.message);
    });
});

select.addEventListener("change", function () {
  let res = select.selectedOptions[0].text;
  body.classList.remove("sanserif", "serif", "mono");
  h && h.classList.remove("sanserif", "serif", "mono");
  localStorage.removeItem("sanserif", "serif", "mono");
  if (res == "Sans Serif") {
    body.classList += " sanserif";
    if (h) {
      h.classList.add(" sanserif");
    }
    console.log("sans serif");
    localStorage.setItem("font", "sanserif");
  }
  if (res == "Serif") {
    body.classList += " serif";
    if (h) {
      h.classList.add(" serif");
    }
    localStorage.setItem("font", "serif");

    console.log("serif");
  }
  if (res == "Mono") {
    body.classList += " mono";
    console.log("Mono");
    if (h) {
      h.classList.add(" mono");
    }
    localStorage.setItem("font", "mono");
  }
});
