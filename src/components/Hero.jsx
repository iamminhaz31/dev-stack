import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="home" className="bg-white">
      <div
        className="
          mx-auto max-w-7xl px-4
          py-8
          sm:px-6
          md:py-14
          lg:grid lg:min-h-[430px] lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8
        "
      >
        {/* ================= TEXT ================= */}
        <div className="text-center lg:text-left">
          <h1
            className="
              text-[26px] font-extrabold leading-[1.08] tracking-tight text-slate-950
              sm:text-4xl
              lg:text-[58px]
            "
          >
            Build Your Ideal
            <br />

            <span className="text-brand-gradient">
              Development Stack
            </span>
          </h1>

          <p
            className="
              mx-auto mt-5 max-w-[340px]
              text-[11px] leading-[18px] text-slate-600
              sm:max-w-xl sm:text-sm sm:leading-6
              lg:mx-0 lg:text-base
            "
          >
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex items-center justify-center gap-3 lg:mt-8 lg:justify-start">
            <a
              href="#technologies"
              className="
                bg-brand-gradient rounded-md
                px-4 py-2.5
                text-[9px] font-semibold text-white
                sm:px-5 sm:py-3 sm:text-xs
              "
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="
                rounded-md border border-slate-300
                px-6 py-2.5
                text-[9px] font-medium text-slate-700
                sm:px-7 sm:py-3 sm:text-xs
              "
            >
              Learn More
            </a>
          </div>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="mt-4 flex justify-center sm:mt-6 lg:mt-0 lg:justify-end">
          <img
            src={banner}
            alt="Development Stack"
            className="
              w-full max-w-[235px]
              sm:max-w-[310px]
              lg:max-w-[390px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;