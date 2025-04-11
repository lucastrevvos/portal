import { Helmet } from 'react-helmet-async';

export function GoogleAnalytics() {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-H46G0T2S9T"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H46G0T2S9T');
        `}
      </script>
    </Helmet>
  );
}
