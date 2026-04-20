import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero({ startAnimation }) {

const heroRef = useRef(null);

useEffect(()=>{

if(!startAnimation) return;

const ctx = gsap.context(()=>{

gsap.from(heroRef.current.querySelector("h1"),{
y:80,
opacity:0,
duration:1.2,
ease:"power4.out"
})

gsap.from(heroRef.current.querySelector("p"),{
y:40,
opacity:0,
delay:.4,
duration:1
})

gsap.from(heroRef.current.querySelectorAll("span"),{
y:30,
opacity:0,
stagger:.08,
delay:.3,
duration:.8
})

gsap.from(heroRef.current.querySelector("img"),{
scale:1.2,
opacity:0,
duration:1.4,
ease:"power4.out"
})

},heroRef)

return ()=>ctx.revert()

},[startAnimation])


  return (
<div ref={heroRef} className="bg-[#EBE9DF] flex justify-center pt-10 pb-20">      
    <div className="w-[1380px]  h-[510px] rounded-2xl overflow-hidden flex shadow-lg">

        {/* LEFT SIDE */}
        <div
  className="pt-20 pl-10 w-[750px] flex flex-col justify-center"
  style={{
  background:
    "linear-gradient(90deg,#F5F3F2 0%,#F0D6CF 35%,#E9B3A6 65%,#E58D7F 100%), radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4), transparent 60%)"
}}
>

          <div className="border border-gray-400 text-xs tracking-[0.25em] px-2.5 py-2 rounded-md w-fit mb-8 text-gray-700">
            MY MISSION
          </div>

          <h1 className="text-[70px] leading-[1.1] font-serif text-[#2e2a26] mb-8">
            Developing for <span className="italic">results.</span>
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-700 tracking-widest mb-8">
            <span>WEB</span>
            <span className="w-px h-4 bg-gray-400"></span>
            <span>BRANDING</span>
            <span className="w-px h-4 bg-gray-400"></span>
            <span>UX/UI</span>
          </div>

          <p className="text-gray-700 max-w-md leading-relaxed">
            Jules Studio is an independent design studio focused on designing
            digital products that are elegant and intuitive to help you
            accomplish your business goals.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#c9bdb3] overflow-hidden w-[640px] ">
          <img
            src="/girl.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}
// all clear