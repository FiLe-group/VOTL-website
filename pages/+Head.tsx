import React from "react";

export default function HeadDefault() {
  return (
    <>
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
      <meta property="og:image" content="/logo.png" />
      <meta property="og:image:alt" content="Voice of the Lord icon" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="Voice of the Lord" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content="https://votl.fileeditor.dev" />
      <meta name="theme-color" content="#6108dd" />
      <link rel="icon" href='/logo.png' type="image/x-icon" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css"
      />
    </>
  );
}
