import './globals.css';
import Script from 'next/script';
import { Providers } from './providers';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  metadataBase: new URL('https://www.smartprintone.com'),
  title: {
    default: 'Smart Print One - Buy Affordable Printers, Ink & Toner Cartridges Online | Free Shipping | 2026',
    template: '%s | Smart Print One',
  },
  description: 'Shop Smart Print One for high-quality printers, ink cartridges, and toner at affordable prices. Inkjet, laser, and all-in-one printers for home and office. Free shipping across North America. Expert support & 30-day returns.',
  keywords: 'buy printers online, printer cartridges, toner cartridges, inkjet printers, laser printers, all-in-one printers, affordable printing supplies, printer ink, bulk ink cartridges, printer toner, HP ink, Canon ink, printing solutions, office printers, home printers, Smart Print One',
  authors: [{ name: 'Smart Print One' }],
  creator: 'Smart Print One',
  publisher: 'Smart Print One',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.smartprintone.com',
    languages: {
      'en-US': 'https://www.smartprintone.com',
      'en-CA': 'https://www.smartprintone.com',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.smartprintone.com',
    siteName: 'Smart Print One',
    title: 'Smart Print One - Premium Printers & Printing Supplies | Best Prices',
    description: 'Discover affordable, high-quality printers and printing supplies. Shop inkjet, laser, and all-in-one printers with free shipping and expert customer support. 30-day guarantee.',
    images: [
      {
        url: 'https://www.smartprintone.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart Print One',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SmartPrintOne',
    title: 'Smart Print One - Premium Printers & Printing Supplies',
    description: 'Shop affordable, high-quality printers and printing supplies online. Inkjet, laser, all-in-one printers with free shipping across North America.',
    images: ['https://www.smartprintone.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Smart Print One',
  },
  other: {
    'msapplication-TileColor': '#f97316',
    'theme-color': '#f97316',
    'revisit-after': '7 days',
    'distribution': 'global',
  },
};

const storeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  'name': 'Smart Print One',
  'description': 'Independent U.S. online retailer specializing in home printers, office printers, laser printers, inkjet printers, and ink & toner supplies.',
  'url': 'https://www.smartprintone.com',
  'logo': 'https://www.smartprintone.com/smartprintonelogo.png',

  'email': 'support@smartprintone.com',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '8787 Shenandoah Park Dr, Apt 826',
    'addressLocality': 'Shenandoah',
    'addressRegion': 'TX',
    'postalCode': '77385',
    'addressCountry': 'US'
  },
  'areaServed': ['US', 'CA'],
  'currenciesAccepted': 'USD',
  'paymentAccepted': 'Credit Card, Debit Card',
  'priceRange': '$$',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Printers & Supplies',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Home Printers'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Office Printers'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Laser Printers'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Inkjet Printers'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Ink & Toner'
        }
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Store Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
        />
      </head>
      <body>
        {/* JivoChat - Deferred until page is interactive */}
        {/* <Script
          id="jivochat-deferred"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              if ('requestIdleCallback' in window) {
                requestIdleCallback(function() {
                  var s = document.createElement('script');
                  s.src = '//code.jivosite.com/widget/********';
                  s.async = true;
                  document.body.appendChild(s);
                });
              } else {
                setTimeout(function() {
                  var s = document.createElement('script');
                  s.src = '//code.jivosite.com/widget/*********';
                  s.async = true;
                  document.body.appendChild(s);
                }, 3000);
              }
            `,
          }}
        /> */}

        <Providers>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
