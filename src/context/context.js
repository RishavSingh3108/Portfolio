import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en")

  // Persist language
  useEffect(() => {
    const storedLang = localStorage.getItem("lang")
    if (storedLang) setLanguage(storedLang)
  }, [])

  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem("lang", lang)
  }

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

/* Custom Hook (Best Practice) */
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider")
  }
  return context
}

export default LanguageContext
