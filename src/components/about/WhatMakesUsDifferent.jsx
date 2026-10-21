import React from "react";

const WhatMakesUsDifferent = () => {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col lg:flex-row min-h-[500px] md:min-h-[620px]">
        {/* Left Side - Black background */}
        <div className="w-full lg:w-1/2 bg-black flex items-center">
          <div className="px-6 sm:px-10 lg:px-20 py-10 sm:py-12 lg:py-16 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 lg:mb-8">
              What Makes Us Different
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 lg:mb-8">
              www.smartprintone.com keeps things simple by acting as a{" "}
              <span className="font-semibold text-white">
                single, accountable source for printers and supplies.
              </span>
            </p>

            <p className="text-white text-sm sm:text-base mb-4">
              Every product we carry is selected and managed with care to keep the buying experience reliable:
            </p>

            <ul className="space-y-2 text-gray-300 text-sm sm:text-base list-disc pl-5 mb-6 lg:mb-8">
              <li>Supported through trusted distribution networks</li>
              <li>Tracked under direct operational control</li>
              <li>Shown with accurate, easy-to-understand product details</li>
            </ul>

            <p className="text-white text-sm sm:text-base mb-4">
              That consistency helps us deliver better:
            </p>

            <ul className="space-y-2 text-gray-300 text-sm sm:text-base list-disc pl-5 mb-6 lg:mb-8">
              <li>Product quality</li>
              <li>Stock availability</li>
              <li>Pricing clarity</li>
              <li>Order fulfillment</li>
            </ul>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              When you shop with us, you know exactly who you are buying from—
              <span className="font-semibold text-white">
                {" "}
                one trusted source focused on service and clarity.
              </span>
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full h-[260px] sm:h-[340px] lg:w-1/2 lg:h-auto relative">
          <img
            src="/whatmakesus.webp"
            alt="What Makes Us Different"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;