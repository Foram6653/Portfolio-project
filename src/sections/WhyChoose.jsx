import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChoose() {

const sectionRef = useRef(null);

useEffect(()=>{

const ctx = gsap.context(()=>{

gsap.from(".why-label",{
y:40,
opacity:0,
duration:.8,
scrollTrigger:{
trigger:sectionRef.current,
start:"top 80%"
}
})

gsap.from(".why-heading",{
y:60,
opacity:0,
duration:1,
delay:.1,
scrollTrigger:{
trigger:sectionRef.current,
start:"top 80%"
}
})

gsap.from(".why-card",{
y:80,
opacity:0,
stagger:.2,
duration:1,
ease:"power3.out",
scrollTrigger:{
trigger:sectionRef.current,
start:"top 75%"
}
})

},sectionRef)

return ()=>ctx.revert()

},[])

  return (
    <section ref={sectionRef} className="w-full flex justify-center   bg-[#EBE9DF]">
      
      <div className="w-[1380px] bg-white rounded-2xl py-20 px-16">

        {/* Top Label */}
        <div className="flex justify-center mb-10 why-label">
          <div className="border border-gray-400 text-xs font-bold tracking-[0.10em] px-4 py-2 rounded-md text-[#2E2C25]">
            WHY CHOOSE JULES STUDIO
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-[56px] font-serif text-[#2e2a26] mb-16 why-heading">
          Results driven, budget smart
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-gray-300 p-10 text-center why-card">
            <img
              src="/bang.png"
              className="h-40 mx-auto mb-6"
              alt=""
            />
            <h3 className="text-[29px] text-[#2e2a26] mb-3">
              Bang for your buck
            </h3>
            <p className="text-gray-600 text-[20px] leading-relaxed">
              High-quality design that looks expensive can be surprisingly affordable.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-gray-300 p-10 text-center why-card">
            <img
              src="/design.png"
              className="h-40 mx-auto mb-6"
              alt=""
            />
            <h3 className="text-[29px] text-[#2e2a26] mb-3">
              Unique Design
            </h3>
            <p className="text-gray-600 text-[20px] leading-relaxed">
              Your business deserves more than a template. Stand out with custom design that speaks to your users.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-gray-300 p-10 text-center why-card">
            <img
              src="/clicks.png"
              className="h-36 mx-auto mb-6"
              alt=""
            />
            <h3 className="text-[29px] text-[#2e2a26] mb-3">
              Converting Clicks
            </h3>
            <p className="text-gray-600 text-[20px] leading-relaxed">
              Your digital tools should lead to success for your business. Harness the power of strategic design.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}