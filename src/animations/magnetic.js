import gsap from "gsap";

export const magnetic = (e, element) => {

  const { offsetX, offsetY, target } = e;

  const x = (offsetX / target.clientWidth - 0.5) * 40;
  const y = (offsetY / target.clientHeight - 0.5) * 40;

  gsap.to(element, {
    x,
    y,
    duration: 0.4
  });

};