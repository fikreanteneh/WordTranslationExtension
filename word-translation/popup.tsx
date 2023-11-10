import React, { useEffect, useState } from "react";

function IndexPopup() {
  const languages = ["english", "arabic", "amharic"]
  const [language, setLanguage] = useState({ WordLanguage: "english", TranslatedLanguage: "english" })
  const [Word, setWord] = useState("")


  useEffect(() => {
    // chrome.storage.local.get(["WordLanguage", "TranslatedLanguage"])
    //   .then((result) => {
    //     if (!result[0]) result[0] = "english"
    //     if (!result[1]) result[1] = "english"
    //     setLanguage({ ...language, ...result })
    //   })
  }, [])

  const handleChangeLanguage = (e) => {
    const { id, value } = e.target
    setLanguage({ ...language, [id]: value })
    chrome.storage.local.set({ [id]: value })
  }

  const handleTranslate = async () => {
    const res = await fetch(`${process.env.BASE_URL}/Translate?Word=${Word}&WordLanguage=${language.WordLanguage}&TranslatedLanguage=${language.TranslatedLanguage}}`)
    const data = await res.json()
    console.log(data)
  }


  return (
    <div style={{ width: "200px", height: 420, display: "flex", flexDirection: "column", padding: 5 }}>
      <h2>Welcome to your Translator</h2>
      <div>
        <label>From: </label>
        <br />
        <select value={language.WordLanguage} id="WordLanguage" onChange={handleChangeLanguage}>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
      <div >
        <label>To: </label>
        <br />
        <select value={language.TranslatedLanguage} id="TranslatedLanguage" onChange={handleChangeLanguage}>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input type="text" value={Word} onChange={(e) => setWord(e.target.value)} />
        <button onClick={handleTranslate}>Translate</button>

      </div>
    </div>
  )
}

export default IndexPopup
