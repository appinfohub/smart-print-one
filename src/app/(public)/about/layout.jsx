export const metadata = {
  title: 'About Us',
  description: 'Learn about www.smartprintone.com, an independent online retailer based in Shenandoah, TX, specializing in practical printing solutions for homes and businesses.',
  alternates: {
    canonical: 'https://www.smartprintone.com/about',
  },
  openGraph: {
    title: 'About Us | www.smartprintone.com',
    description: 'Learn about www.smartprintone.com, an independent online retailer based in Shenandoah, TX, specializing in practical printing solutions for homes and businesses.',
    url: 'https://www.smartprintone.com/about',
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
      'name': 'About Us',
      'item': 'https://www.smartprintone.com/about'
    }
  ]
};

export default function AboutLayout({ children }) {
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
