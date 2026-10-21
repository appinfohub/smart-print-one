"use client";

import { useEffect } from "react";

const conversionScript = `
  if (!window.__installationFailedConversionSent) {
    window.__installationFailedConversionSent = true;
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

export default function ConversionTracker() {
  useEffect(() => {
    if (
      window.location.pathname.replace(/\/+$/, "") !==
      "/printer-setup-troubleshooting/installation-failed"
    )
      return;

    if (window.__installationFailedConversionSent) return;

    const script = document.createElement("script");
    script.id = "installation-failed-conversion";
    script.textContent = conversionScript;
    document.head.appendChild(script);
  }, []);

  return null;
}