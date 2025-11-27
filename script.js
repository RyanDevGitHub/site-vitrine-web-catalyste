console.clear();

gsap.registerPlugin(Flip);

const btnSmall = document.getElementById("flipgrid-btnS");
const btnLarge = document.getElementById("flipgrid-btnL");
const galleryContainer = document.querySelector(".flipgrid-gallery-container");
const items = gsap.utils.toArray(".flipgrid-gallery-item");

btnSmall.addEventListener("click", () => {
  const state = Flip.getState(items);
  galleryContainer.classList.add("small");
  btnSmall.setAttribute("disabled", true);
  btnLarge.removeAttribute("disabled");
  Flip.from(state, {
    duration: 1,
    ease: "power1.inOut",
    absolute: true,
  });
});

btnLarge.addEventListener("click", () => {
  const state = Flip.getState(items);
  galleryContainer.classList.remove("small");
  btnSmall.removeAttribute("disabled");
  btnLarge.setAttribute("disabled", true);
  Flip.from(state, {
    duration: 1,
    ease: "power1.inOut",
    absolute: true,
  });
});
