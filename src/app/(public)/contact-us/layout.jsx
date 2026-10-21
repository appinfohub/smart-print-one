export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with www.smartprintone.com, owned and operated by Nova Ink LLC. Email support@smartprintone.com, or visit us in Shenandoah, TX.',
  alternates: {
    canonical: 'https://www.smartprintone.com/contact-us',
  },
  openGraph: {
    title: 'Contact Us | Smart Print One',
    description: 'Get in touch with www.smartprintone.com. Email support@smartprintone.com, or visit us in Shenandoah, TX.',
    url: 'https://www.smartprintone.com/contact-us',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://www.smartprintone.com'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Contact Us',
      'item': 'https://www.smartprintone.com/contact-us'
    }
  ]
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'Contact www.smartprintone.com',
  'description': 'Contact page for www.smartprintone.com customer service and technical support.',
  'url': 'https://www.smartprintone.com/contact-us',
  'mainEntity': {
    '@type': 'Store',
    'name': 'www.smartprintone.com',

    'email': 'support@smartprintone.com',
    'image': 'https://www.smartprintone.com/smartprintonelogo.png',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '8787 Shenandoah Park Dr, Apt 826',
      'addressLocality': 'Shenandoah',
      'addressRegion': 'TX',
      'postalCode': '77385',
      'addressCountry': 'US'
    }
  }
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}
