export const metadata = {
  title: 'Disclaimer',
  description: 'Read the disclaimer and legal policy for Smart Print One. Learn about our independent retailer status and website usage terms.',
  alternates: {
    canonical: 'https://www.smartprintone.com/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer | Smart Print One',
    description: 'Read the disclaimer and legal policy for Smart Print One. Learn about our independent retailer status and website usage terms.',
    url: 'https://www.smartprintone.com/disclaimer',
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
      'name': 'Disclaimer',
      'item': 'https://www.smartprintone.com/disclaimer'
    }
  ]
};

export default function DisclaimerLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
