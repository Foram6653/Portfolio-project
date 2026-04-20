import gsap from "gsap";

export const textReveal = (element) => {

  gsap.fromTo(
    element,
    { y: 120, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out"
    }
  );

};