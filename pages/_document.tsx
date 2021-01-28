import Document, { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../lib/gtm";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <GTM.Head />
        </Head>
        <body>
          <GTM.Body />
          <Main />
          <NextScript />
          <SimpleAnalytics />
        </body>
      </Html>
    );
  }
}

function SimpleAnalytics() {
  return (
    <>
      <script
        async
        defer
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      ></script>
      <noscript>
        <img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" />
      </noscript>
    </>
  );
}

const GTM = {
  Head: function () {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
        }}
      />
    );
  },
  Body: function () {
    return (
      <noscript>
        <iframe
          src={`"https://www.googletagmanager.com/ns.html?id=${GTM_ID}"`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    );
  },
};
