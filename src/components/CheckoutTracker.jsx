"use client";

import { useEffect } from "react";

const conversionScript = `
  if (!window.__checkoutConversionSent) {
    window.__checkoutConversionSent = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-18528128209/m3yCCIOB_qQdENGZ84JF',
      'value': 1.0,
      'currency': 'USD'
    });
  }
`;

export default function CheckoutTracker() {
  useEffect(() => {
    if (
      window.location.pathname.replace(/\/+$/, "") !==
      "/checkout"
    )
      return;

    if (window.__checkoutConversionSent) return;

    const script = document.createElement("script");
    script.id = "checkout-conversion";
    script.textContent = conversionScript;
    document.head.appendChild(script);
  }, []);

  return null;
}