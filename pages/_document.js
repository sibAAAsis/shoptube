import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8651032257595693"
     crossorigin="anonymous"></Script>
  {/* Google Ads */}
  <ins
    className="adsbygoogle"
    style={{ display: "block" }}
    data-ad-client="ca-pub-8651032257595693"
    data-ad-slot={2870239440}
    data-ad-format="auto"
    data-full-width-responsive="true"
  />
  <Script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</Script>
      </body>
    </Html>
  )
}
