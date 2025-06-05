import "./sonchoy.css";
// import "./sonchoy-responsive.css";
import "./pdfForm.css";
import "react-modal-video/css/modal-video.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { syne, dm_sans } from "@/lib/font";

export const metadata = {
  title: "Elite Funders - Business Loans",
  description: "Small Business Loans in Minutes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dm_sans.variable} ${syne.variable}`}>
      <head>
        {/* --- HYROS SCRIPT --- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var head = document.head;
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = "https://t.elitefunders.com/v1/lst/universal-script?ph=3676229d3e36957f3920d2037960f8b81e584ccda8076e4490cb71e0b5d87e58&tag=!clicked&ref_url=" + encodeURI(document.URL);
              head.appendChild(script);
            `,
          }}
        />
        {/* --- GTM SCRIPT --- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5V37PNQ2');
            `,
          }}
        />
        {/* --- META PIXEL SCRIPT --- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '380942061646501');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {`
            <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=380942061646501&ev=PageView&noscript=1"
            />
          `}
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
