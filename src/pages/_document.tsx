import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="robots" content="index,nofollow" />
        <meta name="googlebot" content="index,nofollow" />
        <meta
          name="description"
          content="Multipurpose Discord bot - custom voice channels, moderation, server management, tickets and more!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://votl.fileeditor.dev" />
        <meta property="og:title" content="VOTL" />
        <meta
          property="og:description"
          content="Multipurpose Discord bot - custom voice channels, moderation, server management, tickets and more!"
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:image:alt" content="Voice of the Lord icon" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Voice of the Lord" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://votl.fileeditor.dev" />
        <meta name="theme-color" content="#6108dd" />
        <link rel="icon" href="/img/logo.png" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
