"use client";

import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            console.log('LCP:', entry.startTime);
            // Track LCP for optimization
            if (typeof gtag !== 'undefined') {
              gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'LCP',
                value: Math.round(entry.startTime),
                non_interaction: true,
              });
            }
            break;
          case 'first-input':
            const fid = entry.processingStart - entry.startTime;
            console.log('FID:', fid);
            if (typeof gtag !== 'undefined') {
              gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FID',
                value: Math.round(fid),
                non_interaction: true,
              });
            }
            break;
          case 'layout-shift':
            if (!entry.hadRecentInput) {
              console.log('CLS:', entry.value);
              if (typeof gtag !== 'undefined') {
                gtag('event', 'web_vitals', {
                  event_category: 'Web Vitals',
                  event_label: 'CLS',
                  value: Math.round(entry.value * 1000),
                  non_interaction: true,
                });
              }
            }
            break;
        }
      }
    });

    // Observe Core Web Vitals
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 1000) {
          console.warn('Slow resource:', entry.name, entry.duration);
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    // Cleanup
    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
    };
  }, []);

  return null;
}