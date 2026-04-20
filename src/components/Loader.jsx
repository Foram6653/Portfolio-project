import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {

  const loaderRef = useRef();

  useEffect(() => {

    gsap.to(loaderRef.current,{
      y:"-100%",
      duration:1.2,
      delay:1.4,
      ease:"power4.inOut"
    })

  },[])

  return (

    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-screen bg-[#D34530] flex items-center justify-center z-[9999]"
    >

      <h1 className="text-[40px] font-medium text-black">
        jules·studio
      </h1>

    </div>

  );
}