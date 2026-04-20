import { useState, useEffect } from "react";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";
import Hero from "./sections/Hero.jsx";
import WhyChoose from "./sections/WhyChoose.jsx";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <SmoothScroll/>

      {loading && <Loader />}

      <Navbar/>
      <Hero startAnimation={!loading}/>
      <WhyChoose/>
    </>
  );
}

export default App;