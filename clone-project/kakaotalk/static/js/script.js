const navBarIconList = [
  document.getElementById("friend-mode-icon"),
  document.getElementById("chatting-mode-icon"),
  document.getElementById("more-mode-icon"),
];

const navModeBox = [
  document.querySelector(".friend-mode"),
  document.querySelector(".chatting-mode"),
  document.querySelector(".more-mode"),
];

for (let idx = 0; idx < navBarIconList.length; idx++) {
  const idxList = [...Array(navBarIconList.length)].map((k, v) => v);
  idxList.splice(idx, 1);
  navBarIconList[idx].onclick = () => {
    navBarIconList[idx].classList.add("nav-bar-selected");
    navModeBox[idx].classList.remove("hide");

    idxList.forEach((idx) => {
      navBarIconList[idx].classList.remove("nav-bar-selected");
      navModeBox[idx].classList.add("hide");
    });
  };
}

/** Benner Dots */
const bennderSlide = document.querySelector(".benner-slide");
const bennerPrev = document.querySelector(".benner-opacity > .prev");
const bennerNext = document.querySelector(".benner-opacity > .next");

let bennerIdx = 1;

bennerNext.onclick = (e) => {
  bennderSlide.classList.remove(`benner-background${bennerIdx}`);
  bennerIdx++;
  bennerIdx = bennerIdx > 3 ? 1 : bennerIdx;
  bennderSlide.classList.add(`benner-background${bennerIdx}`);
};

bennerPrev.onclick = () => {
  bennderSlide.classList.remove(`benner-background${bennerIdx}`);
  bennerIdx--;
  bennerIdx = bennerIdx < 1 ? 3 : bennerIdx;
  bennderSlide.classList.add(`benner-background${bennerIdx}`);
};
