import React from 'react';

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Zeeshan Ahmad",
    "url": "https://zeeshanahmad.vercel.app",
    "sameAs": [
      "https://www.linkedin.com/in/zeeshan-ahmad-azeem",
      "https://github.com/XeeshanAhmed"
    ],
    "jobTitle": "Web Developer",
    "image": "https://zeeshanahmad.vercel.app/profile_img/xeeshan.png",
    "description": "Skilled web developer specializing in Next.js and modern web solutions.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;
