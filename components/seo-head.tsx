"use client";

import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function SEOHead({
  title = 'VismifyTools – World\'s #1 Islamic Tools Platform | Prayer Times, Qibla, Halal Checker',
  description = 'Join 500K+ Muslims using VismifyTools - the most comprehensive Islamic platform. Ultra-accurate Prayer Times, GPS Qibla Finder, AI Halal Checker, Zakat Calculator & more. 100% free, fast & reliable.',
  keywords = [],
  canonical,
  ogImage = '/og-image.png',
  noindex = false
}: SEOHeadProps) {
  const defaultKeywords = [
    'islamic tools', 'muslim tools', 'prayer times', 'qibla finder', 'halal checker',
    'zakat calculator', 'quran reader', 'islamic calendar', 'muslim apps', 'islamic utilities'
  ];

  const allKeywords = [...defaultKeywords, ...keywords];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="VismifyTools - Islamic Tools Platform" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="VismifyTools Team" />
      <meta name="publisher" content="VismifyTools" />
      <meta name="copyright" content="© 2025 VismifyTools. All rights reserved." />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 day" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="target" content="all" />
      <meta name="audience" content="Muslims, Islamic community, Religious practitioners" />
      <meta name="coverage" content="Worldwide" />
      <meta name="subject" content="Islamic Tools and Muslim Utilities" />
      <meta name="abstract" content="Comprehensive Islamic tools platform for modern Muslims" />
      <meta name="topic" content="Islamic Technology, Muslim Apps, Religious Tools" />
      <meta name="summary" content="Essential Islamic tools including Prayer Times, Qibla Finder, Halal Checker, and more" />
      <meta name="classification" content="Islamic Tools & Religious Utilities" />
      <meta name="designer" content="VismifyTools Design Team" />
      <meta name="reply-to" content="support@vismifytools.com" />
      <meta name="owner" content="VismifyTools" />
      <meta name="url" content="https://vismifytools.com" />
      <meta name="identifier-URL" content="https://vismifytools.com" />
      <meta name="directory" content="submission" />
      <meta name="pagename" content={title} />
      <meta name="category" content="Religion & Spirituality, Utilities, Education" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="robots" content="index,follow,archive,snippet,translate" />
      <meta name="googlebot" content="index,follow,archive,snippet,translate" />
      <meta name="bingbot" content="index,follow,archive,snippet,translate" />
      <meta name="slurp" content="index,follow,archive,snippet,translate" />
      <meta name="msnbot" content="index,follow,archive,snippet,translate" />
    </Head>
  );
}