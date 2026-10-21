"use client";

import { useEffect } from "react";

export default function CheckoutTracker() {
  useEffect(() => {
    if (window.location.pathname.replace(/\/+$/, "") !== "/checkout") return;
    if (window.__checkoutConversionSent) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };
    window.__checkoutConversionSent = true;
    window.gtag("event", "conversion", {
      send_to: "AW-18528128209/m3yCCIOB_qQdENGZ84JF",
      value: 1.0,
      currency: "USD",
    });
  }, []);

  return null;
}
