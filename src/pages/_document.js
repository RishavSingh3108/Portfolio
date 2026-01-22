import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts (Minimal & Optimized) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Meta */}
        <meta name="theme-color" content="#f97316" />
        <meta name="author" content="Your Name" />
      </Head>

      <body className="font-inter bg-white dark:bg-black text-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
