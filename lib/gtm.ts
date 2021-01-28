export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

declare const window: { dataLayer: any };

export const pageview = (url: string) => {
  window.dataLayer &&
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
};
