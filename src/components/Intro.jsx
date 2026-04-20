import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Intro(){

const introRef = useRef(null)

useEffect(()=>{

const tl = gsap.timeline()

tl.to(".intro-left",{
width:"0%",
duration:1.2,
ease:"power4.inOut"
})

.to(".intro-right",{
width:"0%",
duration:1.2,
ease:"power4.inOut"
},"<")

.to(introRef.current,{
opacity:0,
duration:.5
})

.to(introRef.current,{
display:"none"
})

.from("#main-site",{
opacity:0,
y:40,
duration:1
})

},[])

return(

<div ref={introRef} className="fixed inset-0 z-[9999] flex">

<div className="intro-left bg-[#2e2a26] w-1/2"></div>

<div className="intro-right bg-[#2e2a26] w-1/2"></div>

</div>

)

}