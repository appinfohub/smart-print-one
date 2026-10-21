import React from "react";

const WhoWeAre = () => {
  return (
    <section className="w-full bg-[#f6eced] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex flex-col gap-6 lg:flex-row lg:min-h-[600px] lg:gap-0">
          {/* Left Image */}
          <div className="w-full h-[260px] sm:h-[340px] lg:h-auto lg:w-[75%] relative rounded-2xl overflow-hidden">
            <img
              src="/bg-image-home.webp"
              alt="Who We Are"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right Background */}
          <div className="hidden lg:block lg:w-[25%] bg-[#f6eced]" />

          {/* Floating Card */}
          <div className="lg:absolute lg:top-1/2 lg:right-4 xl:right-[6%] lg:-translate-y-1/2 w-full lg:w-[42%] xl:w-[38%] z-10">
            <div className="bg-white rounded-[1.5rem] lg:rounded-[2rem] shadow-2xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5 lg:mb-8">
                Who We Are
              </h2>

              <div className="space-y-5 lg:space-y-8 text-gray-700 leading-7 lg:leading-8 text-base lg:text-lg">
                <p>
                  <span className="font-semibold text-gray-900">
                    www.smartprintone.com
                  </span>{" "}
                  is a customer-focused online retailer built to make printer buying simpler for homes, offices, and growing businesses.
                </p>

                <p>
                  We serve customers across the United States and Canada with dependable products and practical guidance for everyday printing needs.
                </p>

                <p>
                  Our goal is straightforward:{" "}
                  <span className="font-semibold text-gray-900">
                    to offer clear choices, reliable service, and a smooth shopping experience from checkout to setup.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;