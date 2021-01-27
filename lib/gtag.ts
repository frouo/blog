export const GA_TRACKING_ID = "UA-113139900-3";
declare const window: { gtag: any };

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag &&
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
};

type GAEvent = {
  action: string;
  category: string;
  label: string;
  value: string;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GAEvent) => {
  window.gtag &&
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
};
