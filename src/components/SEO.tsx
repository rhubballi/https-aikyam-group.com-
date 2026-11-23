import React, { useEffect } from 'react';
import { companyProfile } from '../data/companyData';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: 'Organization' | 'LocalBusiness' | 'Article';
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  image = 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80',
}) => {
  const fullTitle = `${title} | ${companyProfile.name} India`;
  const siteUrl = 'https://jpconstructions.in';
  const fullUrl = `${siteUrl}${canonicalPath}`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Set or create meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attributeName = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attributeName}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('description', description);
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', fullUrl, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Schema.org Structured Data
    const structuredDataId = 'jp-constructions-schema';
    let scriptTag = document.getElementById(structuredDataId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = structuredDataId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://jpconstructions.in/#organization",
          "name": companyProfile.legalName,
          "alternateName": companyProfile.name,
          "url": siteUrl,
          "logo": `${siteUrl}/favicon.svg`,
          "foundingDate": "2001",
          "founder": {
            "@type": "Person",
            "name": "Prakash Rao"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": companyProfile.contact.phone,
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Telugu", "Hindi", "Tamil"]
          }
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://jpconstructions.in/#localbusiness",
          "name": companyProfile.name,
          "image": image,
          "telephone": companyProfile.contact.phone,
          "email": companyProfile.contact.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": companyProfile.headquarters.addressLine1,
            "addressLocality": companyProfile.headquarters.city,
            "addressRegion": companyProfile.headquarters.state,
            "postalCode": companyProfile.headquarters.postalCode,
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": companyProfile.headquarters.coordinates.lat,
            "longitude": companyProfile.headquarters.coordinates.lng
          },
          "openingHours": "Mo-Sa 09:00-18:30"
        }
      ]
    };

    scriptTag.textContent = JSON.stringify(schemaData);
  }, [fullTitle, description, fullUrl, image]);

  return null;
};
