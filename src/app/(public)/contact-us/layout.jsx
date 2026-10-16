export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Smart Print One support team. Email support@smartprintone.com, or visit us in Houston, TX.',
  alternates: {
    canonical: 'https://www.smartprintone.com/contact-us',
  },
  openGraph: {
    title: 'Contact Us | Smart Print One',
    description: 'Get in touch with the Smart Print One support team. Email support@smartprintone.com, or visit us in Houston, TX.',
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
  'name': 'Contact Smart Print One',
  'description': 'Contact page for Smart Print One customer service and technical support.',
  'url': 'https://www.smartprintone.com/contact-us',
  'mainEntity': {
    '@type': 'Store',
    'name': 'Smart Print One',

    'email': 'support@smartprintone.com',
    'image': 'https://www.smartprintone.com/smartprintonelogo.png',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '12602 FM 529',
      'addressLocality': 'Houston',
      'addressRegion': 'TX',
      'postalCode': '77041',
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
