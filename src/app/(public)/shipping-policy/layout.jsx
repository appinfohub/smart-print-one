export const metadata = {
  title: 'Shipping Policy',
  description: 'Read the Shipping Policy of Smart Print One. Learn about shipping times, delivery rates, carriers, and how we deliver to the United States and Canada.',
  alternates: {
    canonical: 'https://www.smartprintone.com/shipping-policy',
  },
  openGraph: {
    title: 'Shipping Policy | Smart Print One',
    description: 'Read the Shipping Policy of Smart Print One. Learn about shipping times, delivery rates, carriers, and how we deliver to the United States and Canada.',
    url: 'https://www.smartprintone.com/shipping-policy',
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
      'name': 'Shipping Policy',
      'item': 'https://www.smartprintone.com/shipping-policy'
    }
  ]
};

export default function ShippingPolicyLayout({ children }) {
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
