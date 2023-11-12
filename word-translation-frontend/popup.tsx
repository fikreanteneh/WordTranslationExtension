import { useStorage } from "@plasmohq/storage/hook";
import React, { useEffect, useState } from "react";


function IndexPopup() {

  const [languages, setLanguages] = useState(["english"])
  const [Word, setWord] = useState("")
  const [TranslatedWord, setTranslatedWord] = useState("Enter word to translate")
  const [WordLanguage, setWordLanguage] = useStorage("WordLanguage",
    (prev) => prev ? prev : "english")
  const [TranslatedLanguage, setTranslatedLanguage] = useStorage("TranslatedWordLanguage", (prev) => prev ? prev : "english")



  useEffect(() => {
    const fetchData = async () => {
      try {
        setTranslatedWord("We are Loading the languages...");
        const res = await fetch(`${process.env.PLASMO_PUBLIC_BASE_URL}/Language`);
        const data = await res.json();
        if (data.success) {
          const newLanguages = data.message.map((element) => element.Language);
          setLanguages(newLanguages);
          setTranslatedWord("Enter word to translate");
        } else {
          setTranslatedWord("No available Language at the Time");
        }
      } catch (error) {
        setTranslatedWord(`Error fetching data Available Languages try Again !`);
      }
    }
    fetchData();
  }, []);


  const handleChangeLanguage = (e) => {
    const { id, value } = e.target
    if (id === "WordLanguage") setWordLanguage(value)
    else setTranslatedLanguage(value)
  }

  const handleTranslate = async () => {
    try {
      setTranslatedWord("Loading...")
      const res = await fetch(
        `${process.env.PLASMO_PUBLIC_BASE_URL}/Translation?Word=${Word}&Language=${WordLanguage}&TranslatedLanguage=${TranslatedLanguage}`
      );
      const data = await res.json()
      if (data.success && data.message) {
        setTranslatedWord(data.message.TranslatedWord)
      } else {
        setTranslatedWord("No translation Yet!")
      }
    } catch (err) {
      setTranslatedWord(err.message)
    }
  }


  return (
    <div style={{ width: "200px", height: 420, display: "flex", flexDirection: "column", padding: 5 }}>
      <h2>Welcome to your Translator</h2>
      <div>
        <label>From: </label>
        <br />
        <select value={WordLanguage} id="WordLanguage" onChange={handleChangeLanguage}>
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
        <select value={TranslatedLanguage} id="TranslatedLanguage" onChange={handleChangeLanguage}>
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
      <h2 style={{ wordBreak: "break-word" }}>
        {TranslatedWord}
      </h2>
    </div>
  )
}

export default IndexPopup
