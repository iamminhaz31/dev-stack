import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="home" className="bg-white">
      <div
        className="
          mx-auto max-w-7xl px-4 py-8
          sm:px-6
          md:py-14
          lg:grid lg:min-h-[430px] lg:grid-cols-2
          lg:items-center lg:gap-12 lg:px-8
        "
      >

        {/* Left */}
        <div className="text-center lg:text-left">
          <h1
            className="
              text-[26px] font-extrabold leading-[1.08]
              tracking-tight text-slate-950
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

            {/* Explore Technologies */}
            <a
              href="#technologies"
              className="
                bg-brand-gradient
                rounded-md
                px-4 py-2.5
                text-[9px] font-semibold text-white
                shadow-sm
                transition-all duration-300 ease-out

                hover:-translate-y-1
                hover:scale-105
                hover:shadow-lg
                hover:shadow-pink-200

                sm:px-5 sm:py-3 sm:text-xs
              "
            >
              Explore Technologies
            </a>

            {/* Learn More */}
            <a
              href="#about"
              className="
                rounded-md
                border border-slate-300
                bg-white
                px-6 py-2.5
                text-[9px] font-medium text-slate-700
                transition-all duration-300 ease-out

                hover:-translate-y-1
                hover:border-purple-500
                hover:bg-purple-50
                hover:text-purple-600
                hover:shadow-md

                sm:px-7 sm:py-3 sm:text-xs
              "
            >
              Learn More
            </a>

          </div>
        </div>

        {/* Image */}
        <div className="mt-4 flex justify-center sm:mt-6 lg:mt-0 lg:justify-end">
          <img
            src={banner}
            alt="Development Stack"
            className="
              w-full max-w-[235px]
              transition-transform duration-500
              hover:scale-105
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