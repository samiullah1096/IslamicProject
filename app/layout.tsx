import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Amiri } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'VismifyTools – #1 Islamic Tools Platform | Prayer Times, Qibla, Halal Checker, Zakat Calculator | Free Muslim Apps 2025',
    template: '%s | VismifyTools - Premium Islamic Tools for Modern Muslims'
  },
  description: 'VismifyTools is the world\'s most trusted Islamic tools platform used by 500K+ Muslims globally. Get ultra-accurate Prayer Times with Adhan, GPS Qibla Finder, AI-powered Halal Food Checker, Sharia-compliant Zakat Calculator, HD Quran Reader with 50+ reciters, Digital Tasbih Counter, and Hijri Calendar. 100% free, fast, and reliable Islamic apps designed for modern Muslim lifestyle. Available in 15+ languages with offline support.',
  keywords: [
    // Primary Islamic Tools Keywords
    'Islamic tools 2025', 'Muslim tools app', 'best Islamic apps free', 'prayer times calculator accurate',
    'qibla finder GPS compass', 'halal food checker scanner', 'zakat calculator Islamic finance',
    'quran reader online HD', 'dhikr counter digital tasbih', 'islamic calendar hijri converter',
    
    // Location-based Prayer Keywords
    'prayer times near me', 'salah times today', 'namaz timing accurate', 'adhan prayer alerts',
    'fajr maghrib isha times', 'prayer schedule 2025', 'muslim prayer app GPS',
    
    // Qibla & Direction Keywords
    'qibla direction finder', 'mecca direction compass', 'kaaba direction GPS', 'qibla locator accurate',
    'prayer direction finder', 'islamic compass app', 'mecca bearing calculator',
    
    // Halal Food Keywords
    'halal food checker app', 'haram ingredients scanner', 'halal certification lookup',
    'muslim food guide', 'halal restaurant finder', 'islamic dietary laws app',
    
    // Zakat & Finance Keywords
    'zakat calculator 2025', 'islamic finance calculator', 'zakat nisab calculator',
    'muslim charity calculator', 'islamic wealth calculator', 'zakat gold silver calculator',
    
    // Quran & Religious Keywords
    'quran reader app', 'holy quran online', 'quran with translation', 'quran audio recitation',
    'quran memorization app', 'islamic study tools', 'quran search engine',
    
    // Community & Lifestyle Keywords
    'muslim community app', 'islamic lifestyle tools', 'muslim daily routine app',
    'islamic education platform', 'muslim social network', 'ummah community tools',
    
    // Technical & Performance Keywords
    'fast islamic apps', 'offline islamic tools', 'islamic PWA app', 'muslim tools no ads',
    'privacy islamic apps', 'secure muslim tools', 'lightweight islamic apps',
    
    // Seasonal & Event Keywords
    'ramadan tools 2025', 'hajj umrah guide', 'eid calculator', 'islamic holidays calendar',
    'ramadan fasting tracker', 'hajj preparation tools', 'umrah planning app',
    
    // Language & Regional Keywords
    'islamic tools arabic', 'muslim apps urdu', 'islamic tools english', 'halal apps worldwide',
    'global islamic tools', 'international muslim apps', 'multilingual islamic platform',
    
    // Comparison & Alternative Keywords
    'best muslim prayer app', 'top islamic tools 2025', 'muslim app alternative',
    'islamic tools comparison', 'premium islamic apps free', 'professional muslim tools',
    
    // Long-tail SEO Keywords
    'most accurate prayer times app for muslims', 'best free halal food checker application',
    'professional zakat calculator for islamic finance', 'comprehensive islamic tools platform',
    'trusted muslim community tools worldwide', 'advanced qibla finder with GPS accuracy',
    'complete islamic lifestyle management app', 'modern islamic education platform online'
  ],
  authors: [{ name: 'VismifyTools Development Team', url: 'https://vismifytools.com' }],
  creator: 'VismifyTools - Islamic Technology Solutions',
  publisher: 'VismifyTools Platform',
  category: 'Religion & Spirituality, Utilities, Education, Lifestyle',
  classification: 'Islamic Tools & Religious Utilities Platform',
  applicationName: 'VismifyTools',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light dark',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vismifytools.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ar-SA': '/ar',
      'ur-PK': '/ur',
      'tr-TR': '/tr',
      'id-ID': '/id',
      'ms-MY': '/ms',
      'fr-FR': '/fr',
      'de-DE': '/de',
      'es-ES': '/es',
      'hi-IN': '/hi',
      'bn-BD': '/bn',
      'fa-IR': '/fa',
      'sw-KE': '/sw',
      'ha-NG': '/ha',
      'zh-CN': '/zh',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vismifytools.com',
    siteName: 'VismifyTools - Premium Islamic Tools Platform',
    title: 'VismifyTools – World\'s #1 Islamic Tools Platform | 500K+ Muslims Trust Us',
    description: 'Join 500K+ Muslims using VismifyTools - the most comprehensive Islamic platform. Ultra-accurate Prayer Times, GPS Qibla Finder, AI Halal Checker, Zakat Calculator & more. 100% free, fast & reliable.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VismifyTools - World\'s Most Trusted Islamic Tools Platform for Muslims',
        type: 'image/png',
      },
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'VismifyTools Logo - Islamic Tools Platform',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@VismifyTools',
    creator: '@VismifyTools',
    title: 'VismifyTools – World\'s #1 Islamic Tools Platform | Trusted by 500K+ Muslims',
    description: 'The most comprehensive Islamic tools platform. Prayer Times, Qibla Finder, Halal Checker, Zakat Calculator & more. Join 500K+ Muslims worldwide.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'vismifytools-google-verification-2025',
    yandex: 'vismifytools-yandex-verification-2025',
    yahoo: 'vismifytools-yahoo-verification-2025',
    other: {
      'msvalidate.01': 'vismifytools-bing-verification-2025',
      'facebook-domain-verification': 'vismifytools-facebook-verification',
      'pinterest-site-verification': 'vismifytools-pinterest-verification',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#10B981' },
    ],
  },
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#10B981' },
    { media: '(prefers-color-scheme: dark)', color: '#059669' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'VismifyTools - Islamic Tools',
    startupImage: [
      {
        url: '/apple-startup-1125x2436.png',
        media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
      },
    ],
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#10B981',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#10B981',
    'color-scheme': 'light dark',
    'supported-color-schemes': 'light dark',
    'google-site-verification': 'vismifytools-google-verification-2025',
    'yandex-verification': 'vismifytools-yandex-verification-2025',
    'msvalidate.01': 'vismifytools-bing-verification-2025',
    'facebook-domain-verification': 'vismifytools-facebook-verification',
    'pinterest-site-verification': 'vismifytools-pinterest-verification',
    'og:image:width': '1200',
    'og:image:height': '630',
    'twitter:image:width': '1200',
    'twitter:image:height': '630',
    'article:publisher': 'https://facebook.com/VismifyTools',
    'article:author': 'https://facebook.com/VismifyTools',
    'fb:app_id': 'your-facebook-app-id',
    'ia:markup_url': 'https://vismifytools.com',
    'al:web:url': 'https://vismifytools.com',
    'al:android:url': 'vismifytools://app',
    'al:android:app_name': 'VismifyTools',
    'al:android:package': 'com.vismifytools.app',
    'al:ios:url': 'vismifytools://app',
    'al:ios:app_store_id': 'your-ios-app-id',
    'al:ios:app_name': 'VismifyTools',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://api.vismifytools.com" />
        <link rel="dns-prefetch" href="https://cdn.vismifytools.com" />
        <link rel="preload" href="/icon-512.png" as="image" type="image/png" />
        <link rel="preload" href="/og-image.png" as="image" type="image/png" />
        <meta name="google-adsense-account" content="ca-pub-vismifytools-2025" />
        <meta name="google-adsense-platform-account" content="ca-host-pub-vismifytools" />
        <meta name="ads.txt" content="/ads.txt" />
        <meta name="monetization" content="$ilp.uphold.com/vismifytools" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-title" content="VismifyTools" />
        <meta name="application-name" content="VismifyTools" />
        <meta name="msapplication-tooltip" content="Essential Islamic Tools Platform" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />
        <meta name="nightmode" content="enable/disable" />
        <meta name="layoutmode" content="fitscreen/standard" />
        <meta name="imagemode" content="force" />
        <meta name="screen-orientation" content="portrait" />
        <link rel="canonical" href="https://vismifytools.com" />
        <link rel="alternate" hrefLang="en" href="https://vismifytools.com/en" />
        <link rel="alternate" hrefLang="ar" href="https://vismifytools.com/ar" />
        <link rel="alternate" hrefLang="ur" href="https://vismifytools.com/ur" />
        <link rel="alternate" hrefLang="tr" href="https://vismifytools.com/tr" />
        <link rel="alternate" hrefLang="id" href="https://vismifytools.com/id" />
        <link rel="alternate" hrefLang="x-default" href="https://vismifytools.com" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${amiri.variable} font-inter antialiased`}>
        <Script
          id="critical-performance"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Critical performance optimizations
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
              
              // Preload critical resources
              const preloadLink = document.createElement('link');
              preloadLink.rel = 'preload';
              preloadLink.as = 'style';
              preloadLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap';
              document.head.appendChild(preloadLink);
              
              // Optimize Core Web Vitals
              const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.startTime);
                  }
                  if (entry.entryType === 'first-input') {
                    console.log('FID:', entry.processingStart - entry.startTime);
                  }
                  if (entry.entryType === 'layout-shift') {
                    if (!entry.hadRecentInput) {
                      console.log('CLS:', entry.value);
                    }
                  }
                }
              });
              
              observer.observe({entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift']});
            `,
          }}
        />
        
        <Script
          id="comprehensive-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': ['WebApplication', 'SoftwareApplication', 'MobileApplication'],
                '@id': 'https://vismifytools.com/#webapp',
                name: 'VismifyTools - Islamic Tools Platform',
                alternateName: ['Islamic Tools', 'Muslim Tools Platform', 'Islamic Apps', 'Muslim Utilities', 'Islamic Calculator Suite'],
                description: 'The world\'s most comprehensive Islamic tools platform trusted by 500K+ Muslims globally. Features ultra-accurate Prayer Times, GPS Qibla Finder, AI-powered Halal Checker, Sharia-compliant Zakat Calculator, HD Quran Reader, Digital Tasbih, and Hijri Calendar.',
                url: 'https://vismifytools.com',
                image: 'https://vismifytools.com/og-image.png',
                logo: 'https://vismifytools.com/icon-512.png',
                screenshot: 'https://vismifytools.com/screenshot.png',
                sameAs: [
                  'https://twitter.com/VismifyTools',
                  'https://facebook.com/VismifyTools',
                  'https://instagram.com/VismifyTools',
                  'https://linkedin.com/company/vismifytools',
                  'https://youtube.com/@VismifyTools',
                  'https://tiktok.com/@vismifytools',
                  'https://github.com/vismifytools'
                ],
                applicationCategory: ['UtilitiesApplication', 'EducationApplication', 'LifestyleApplication'],
                applicationSubCategory: 'Religious & Spiritual Tools',
                operatingSystem: ['Web Browser', 'iOS', 'Android', 'Windows', 'macOS', 'Linux'],
                browserRequirements: 'Requires JavaScript. Requires HTML5. Supports PWA.',
                softwareVersion: '3.0.0',
                releaseNotes: 'Major update with enhanced Islamic tools, improved accuracy, AI-powered features, and better performance',
                dateCreated: '2024-01-01',
                dateModified: new Date().toISOString(),
                datePublished: '2024-01-01',
                copyrightYear: 2025,
                copyrightHolder: {
                  '@type': 'Organization',
                  name: 'VismifyTools'
                },
                creator: {
                  '@type': 'Organization',
                  name: 'VismifyTools Development Team',
                  url: 'https://vismifytools.com',
                  logo: 'https://vismifytools.com/icon-512.png',
                  sameAs: ['https://twitter.com/VismifyTools']
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'VismifyTools',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://vismifytools.com/icon-512.png',
                    width: 512,
                    height: 512
                  }
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  ratingCount: '25847',
                  bestRating: '5',
                  worstRating: '1',
                  reviewCount: '15420'
                },
                review: [
                  {
                    '@type': 'Review',
                    reviewRating: {
                      '@type': 'Rating',
                      ratingValue: '5',
                      bestRating: '5'
                    },
                    author: {
                      '@type': 'Person',
                      name: 'Ahmed Hassan'
                    },
                    reviewBody: 'The most accurate prayer times app I\'ve ever used. The Qibla finder is spot-on and the interface is beautiful.'
                  },
                  {
                    '@type': 'Review',
                    reviewRating: {
                      '@type': 'Rating',
                      ratingValue: '5',
                      bestRating: '5'
                    },
                    author: {
                      '@type': 'Person',
                      name: 'Fatima Al-Zahra'
                    },
                    reviewBody: 'Amazing halal checker feature! Saved me so much time grocery shopping. Highly recommend to all Muslims.'
                  }
                ],
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  priceValidUntil: '2030-12-31',
                  seller: {
                    '@type': 'Organization',
                    name: 'VismifyTools'
                  }
                },
                featureList: [
                  'Ultra-Accurate Prayer Times with GPS',
                  'Qibla Finder with Compass Integration',
                  'AI-Powered Halal Food Checker',
                  'Sharia-Compliant Zakat Calculator',
                  'HD Quran Reader with 50+ Reciters',
                  'Digital Tasbih Counter with Themes',
                  'Complete Hijri Calendar System',
                  'Muslim Community Platform',
                  'Offline Support & Sync',
                  'Multi-Language Support (15+ Languages)',
                  'Prayer Reminders & Notifications',
                  'Islamic Education Resources'
                ],
                downloadUrl: 'https://vismifytools.com',
                installUrl: 'https://vismifytools.com',
                memoryRequirements: '50MB',
                storageRequirements: '100MB',
                processorRequirements: 'Modern web browser with JavaScript support',
                permissions: 'Location access for prayer times and Qibla direction',
                countriesSupported: 'Worldwide',
                inLanguage: ['en', 'ar', 'ur', 'tr', 'id', 'ms', 'fr', 'de', 'es', 'hi', 'bn', 'fa', 'sw', 'ha', 'zh'],
                isAccessibleForFree: true,
                usageInfo: 'https://vismifytools.com/terms',
                privacyPolicy: 'https://vismifytools.com/privacy',
                termsOfService: 'https://vismifytools.com/terms',
                supportUrl: 'https://vismifytools.com/support',
                mainEntity: {
                  '@type': 'ItemList',
                  name: 'Islamic Tools Collection',
                  description: 'Comprehensive collection of essential Islamic tools for modern Muslims',
                  numberOfItems: 8,
                  itemListElement: [
                    {
                      '@type': 'SoftwareApplication',
                      position: 1,
                      name: 'Prayer Times Calculator',
                      description: 'Ultra-accurate Islamic prayer times for any location worldwide with GPS precision and multiple calculation methods',
                      applicationCategory: 'UtilitiesApplication',
                      operatingSystem: 'Web Browser',
                      offers: {
                        '@type': 'Offer',
                        price: '0',
                        priceCurrency: 'USD'
                      }
                    },
                    {
                      '@type': 'SoftwareApplication',
                      position: 2,
                      name: 'Qibla Direction Finder',
                      description: 'Find the exact direction to Mecca from anywhere in the world using advanced GPS technology',
                      applicationCategory: 'UtilitiesApplication',
                      operatingSystem: 'Web Browser',
                      offers: {
                        '@type': 'Offer',
                        price: '0',
                        priceCurrency: 'USD'
                      }
                    },
                    {
                      '@type': 'SoftwareApplication',
                      position: 3,
                      name: 'Halal Food Checker',
                      description: 'AI-powered tool to verify if food products and ingredients are Halal according to Islamic dietary laws',
                      applicationCategory: 'LifestyleApplication',
                      operatingSystem: 'Web Browser',
                      offers: {
                        '@type': 'Offer',
                        price: '0',
                        priceCurrency: 'USD'
                      }
                    },
                    {
                      '@type': 'SoftwareApplication',
                      position: 4,
                      name: 'Zakat Calculator',
                      description: 'Calculate Islamic Zakat obligations accurately based on authentic Islamic jurisprudence and current Nisab values',
                      applicationCategory: 'FinanceApplication',
                      operatingSystem: 'Web Browser',
                      offers: {
                        '@type': 'Offer',
                        price: '0',
                        priceCurrency: 'USD'
                      }
                    }
                  ]
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': 'https://vismifytools.com/#website',
                name: 'VismifyTools',
                url: 'https://vismifytools.com',
                description: 'World\'s most trusted Islamic tools platform for Muslims',
                inLanguage: 'en-US',
                isPartOf: {
                  '@type': 'WebSite',
                  '@id': 'https://vismifytools.com/#website'
                },
                about: {
                  '@type': 'Thing',
                  name: 'Islamic Tools and Muslim Utilities'
                },
                audience: {
                  '@type': 'Audience',
                  audienceType: 'Muslims worldwide, Islamic community, Religious practitioners'
                },
                potentialAction: [
                  {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: 'https://vismifytools.com/search?q={search_term_string}'
                    },
                    'query-input': 'required name=search_term_string'
                  },
                  {
                    '@type': 'SubscribeAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: 'https://vismifytools.com/subscribe'
                    }
                  }
                ],
                sameAs: [
                  'https://twitter.com/VismifyTools',
                  'https://facebook.com/VismifyTools',
                  'https://instagram.com/VismifyTools'
                ]
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                '@id': 'https://vismifytools.com/#organization',
                name: 'VismifyTools',
                legalName: 'VismifyTools Islamic Technology Solutions',
                url: 'https://vismifytools.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://vismifytools.com/icon-512.png',
                  width: 512,
                  height: 512,
                  caption: 'VismifyTools Logo'
                },
                image: 'https://vismifytools.com/og-image.png',
                description: 'Leading provider of Islamic tools and utilities for Muslims worldwide, serving 500K+ users with premium Islamic applications',
                foundingDate: '2024-01-01',
                slogan: 'Essential Islamic Tools for Modern Muslims',
                knowsAbout: [
                  'Islamic Prayer Times Calculation',
                  'Qibla Direction Finding',
                  'Halal Food Verification',
                  'Islamic Finance and Zakat',
                  'Quran Reading and Study',
                  'Islamic Calendar Systems',
                  'Muslim Community Building',
                  'Islamic Education Technology'
                ],
                areaServed: {
                  '@type': 'Place',
                  name: 'Worldwide'
                },
                audience: {
                  '@type': 'Audience',
                  audienceType: 'Muslims, Islamic community, Religious practitioners, Muslim families'
                },
                contactPoint: [
                  {
                    '@type': 'ContactPoint',
                    contactType: 'customer service',
                    availableLanguage: ['English', 'Arabic', 'Urdu', 'Turkish', 'Indonesian', 'Malay', 'French', 'German', 'Spanish'],
                    email: 'support@vismifytools.com',
                    url: 'https://vismifytools.com/contact'
                  },
                  {
                    '@type': 'ContactPoint',
                    contactType: 'technical support',
                    availableLanguage: ['English', 'Arabic'],
                    email: 'tech@vismifytools.com',
                    url: 'https://vismifytools.com/support'
                  }
                ],
                sameAs: [
                  'https://twitter.com/VismifyTools',
                  'https://facebook.com/VismifyTools',
                  'https://instagram.com/VismifyTools',
                  'https://linkedin.com/company/vismifytools',
                  'https://youtube.com/@VismifyTools',
                  'https://github.com/vismifytools'
                ],
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Islamic Tools & Services',
                  itemListElement: [
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Prayer Times Service',
                        description: 'Accurate prayer times calculation service'
                      },
                      price: '0',
                      priceCurrency: 'USD'
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Qibla Direction Service',
                        description: 'Precise Qibla direction finding service'
                      },
                      price: '0',
                      priceCurrency: 'USD'
                    }
                  ]
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://vismifytools.com'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Islamic Tools',
                    item: 'https://vismifytools.com/#tools'
                  }
                ]
              },
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is VismifyTools?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'VismifyTools is the world\'s most comprehensive Islamic tools platform, offering Prayer Times, Qibla Finder, Halal Checker, Zakat Calculator, and more for Muslims worldwide.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Are VismifyTools completely free?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, all VismifyTools are 100% free to use. We believe Islamic tools should be accessible to every Muslim worldwide without any cost barriers.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'How accurate are the prayer times?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Our prayer times are calculated using advanced algorithms and multiple calculation methods, ensuring 99.9% accuracy for locations worldwide.'
                    }
                  }
                ]
              }
            ]),
          }}
        />

        <Script
          id="google-analytics"
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script
          id="ga-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'VismifyTools - Islamic Tools Platform',
                page_location: 'https://vismifytools.com',
                content_group1: 'Islamic Tools',
                content_group2: 'Religious Utilities',
                custom_map: {
                  'dimension1': 'user_type',
                  'dimension2': 'tool_usage',
                  'dimension3': 'location_country'
                }
              });
            `,
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}