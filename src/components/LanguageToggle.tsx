"use client";
import { useEffect, useState } from "react";
import styles from "./LanguageToggle.module.scss";
export type SiteLanguage = "fr" | "en";
export function useSiteLanguage(): SiteLanguage {
  const [lang, setLang] = useState<SiteLanguage>("fr");
  useEffect(() => {
    const sync = () => setLang(window.localStorage.getItem("portfolio-language") === "en" ? "en" : "fr");
    sync();
    document.documentElement.lang = window.localStorage.getItem("portfolio-language") === "en" ? "en" : "fr";
    window.addEventListener("portfolio-language-change", sync);
    window.addEventListener("storage", sync);
    return () => { window.removeEventListener("portfolio-language-change", sync); window.removeEventListener("storage", sync); };
  }, []);
  return lang;
}
export function LanguageToggle() {
  const lang = useSiteLanguage();
  const change = (next: SiteLanguage) => {
    window.localStorage.setItem("portfolio-language", next);
    document.documentElement.lang = next;
    window.dispatchEvent(new Event("portfolio-language-change"));
  };
  return <div className={styles.toggle} role="group" aria-label={lang === "fr" ? "Choisir la langue" : "Choose language"}>
    <button type="button" aria-pressed={lang === "fr"} aria-label="Français" title="Français" onClick={() => change("fr")}>FR</button>
    <span aria-hidden="true">/</span>
    <button type="button" aria-pressed={lang === "en"} aria-label="English" title="English" onClick={() => change("en")}>EN</button>
  </div>;
}
