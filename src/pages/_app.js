import "@/styles/globals.css"
import { LanguageProvider } from "../context/context"
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* 1. This changes the text on the browser tab */}
        <title>Rishav's Portfolio</title>
        
        <meta name="description" content="Personal portfolio showcasing projects, skills, and experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* 2. This points to the icon file in your 'public' folder */}
        <link rel="icon" href="/favicon.jpg" />
       
      </Head>

      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  )
}