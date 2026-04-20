import gsap from "gsap";

export const pageReveal = () => {

  const tl = gsap.timeline();

  tl.to(".loader", {
    y: "-100%",
    duration: 1.4,
    ease: "power4.inOut"
  });

};