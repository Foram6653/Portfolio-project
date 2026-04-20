const Navbar = () => {
  return (
    <div className="w-full flex justify-center mt-10">

      {/* Pill Navbar */}
      <div className="w-[96%] max-w-[1300px] bg-white rounded-full px-8 py-4 shadow-sm">

        <div className="flex items-center justify-between">

          {/* LEFT - Logo */}
          <div className="text-[22px] tracking-[0.5px] font-medium">
            jules<span className="mx-1">·</span>studio
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">

            {/* Nav Links */}
            <div className="flex items-center gap-5 text-[15px]">

              <span className="flex items-center gap-1 font-medium">
                <span className="text-[18px] leading-none">•</span>
                Home
              </span>

              <span className="text-gray-600">Work</span>
            </div>

            {/* Button */}
            <button className="bg-black text-white text-[14px] px-5 py-2 rounded-full">
              Book a Free Call
            </button>

            {/* Language */}
            <div className="text-[14px] text-gray-700">
              EN <span className="mx-1">|</span> ES
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Navbar;