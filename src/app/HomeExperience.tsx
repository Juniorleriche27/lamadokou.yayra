"use client";
import Link from "next/link";
import { useSiteLanguage } from "@/components/LanguageToggle";
import { Meta, Schema } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { ecosystemProjects } from "@/data/projects";
import styles from "./portfolio.module.scss";
import { englishTaglines } from "@/data/project-translations";

const selectedNames = ["MERQALOR CREDIT", "CAURI / Voice-to-Ledger", "DevBridge", "CoraBiz", "EnergiSight", "Mataki"];

export default function HomeExperience() {
  const lang = useSiteLanguage();
  const en = lang === "en";
  const featured = selectedNames.map((name) => ecosystemProjects.find((item) => item.name === name)).filter((item) => item !== undefined);
  const live = ecosystemProjects.filter((project) => project.status === "Live").length;
  return (
    <main className={styles.portfolio}>
      <Schema as="webPage" baseURL={baseURL} path={home.path} title={home.title} description={home.description} image={`/api/og/generate?title=${encodeURIComponent(home.title)}`} author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }} />
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.container}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroContent}>
            <div className={styles.availability}><span className={styles.pulse} /> {en ? "AVAILABLE FOR REMOTE MISSIONS" : "DISPONIBLE POUR MISSIONS À DISTANCE"} <span className={styles.availabilityDivider}>/</span> GMT · UTC+0</div>
            <p className={styles.eyebrow}>YAYRA JUNIOR LAMADOKOU <span>{en ? "— AI ENGINEER & PRODUCT BUILDER" : "— INGÉNIEUR IA & CRÉATEUR DE PRODUITS"}</span></p>
            <h1 id="hero-title">{en ? <>I build AI products<br />that <span>actually ship<span className={styles.period}>.</span></span></> : <>Je crée des produits IA<br /><span>qui prennent vie<span className={styles.period}>.</span></span></>}</h1>
            <p className={styles.heroDescription}>{en ? "From idea to a real product online. I build useful AI experiences, robust backend systems, and applications ready to use — not just prototypes." : "De l’idée au produit en ligne. Je conçois des expériences IA utiles, des moteurs backend robustes et des applications prêtes à être utilisées — pas seulement des prototypes."}</p>
            <div className={styles.heroActions}>
              <Link className={styles.ctaPrimary} href="/work">{en ? "Explore my projects" : "Explorer mes projets"} <span aria-hidden="true">↗</span></Link>
              <a className={styles.ctaSecondary} href="mailto:ylamadokou@gmail.com?subject=Mission%20AI%20Engineer">{en ? "Let’s discuss your project" : "Discutons de votre projet"} <span aria-hidden="true">↗</span></a>
            </div>
            <div className={styles.techLine}><span>{en ? "TECH STACK" : "TECHNOLOGIES"}</span><span>FASTAPI</span><span>NEXT.JS</span><span>PYTHON</span><span>RAG / LLM</span><span>STT</span></div>
          </div>
          <aside className={styles.heroAside} aria-label="Indicateurs du portfolio">
            <div className={styles.panelTop}><span className={styles.orbit} /> {en ? "SYSTEM STATUS" : "ÉTAT DU SYSTÈME"} <span className={styles.systemOnline}>● {en ? "OPERATIONAL" : "OPÉRATIONNEL"}</span></div>
            <div className={styles.visualCore}><div className={styles.coreRing}><div className={styles.coreRingInner}><span>YL</span></div></div><span className={styles.coreCaption}>{en ? "ENGINEERING REAL-WORLD AI" : "INGÉNIERIE IA CONCRÈTE"}</span></div>
            <div className={styles.metricGrid}>
              <div><strong>{ecosystemProjects.length.toString().padStart(2,"0")}</strong><span>{en ? "PROJECTS" : "PROJETS RECENSÉS"}</span></div>
              <div><strong>{live.toString().padStart(2,"0")}</strong><span>{en ? "URLS REACHABLE AT SCAN" : "URLS ACCESSIBLES AU SCAN"}</span></div>
              <div><strong>3,182</strong><span>{en ? "CONTRIBUTIONS / YEAR*" : "CONTRIBUTIONS / AN*"}</span></div>
              <div><strong>GMT</strong><span>{en ? "REMOTE FIRST" : "À DISTANCE"}</span></div>
            </div>
          </aside>
        </section>
        <div className={styles.ticker} aria-label="Expertises"><span>{en ? "AI ENGINEERING" : "INGÉNIERIE IA"}</span><i /> <span>{en ? "FULL-STACK PRODUCTS" : "PRODUITS FULL-STACK"}</span><i /> <span>{en ? "RAG & AGENTS" : "RAG & AGENTS"}</span><i /> <span>{en ? "VOICE AUTOMATION" : "AUTOMATISATION VOCALE"}</span><i /> <span>{en ? "DATA INTELLIGENCE" : "INTELLIGENCE DES DONNÉES"}</span></div>
        <section className={styles.workSection} aria-labelledby="featured-title">
          <div className={styles.sectionIntro}><div><p className={styles.eyebrow}>{en ? "01 / SELECTED WORK" : "01 / PROJETS À LA UNE"}</p><h2 id="featured-title">{en ? <>Built, tested, <em>deployed.</em></> : <>Conçus, testés, <em>déployés.</em></>}</h2><p>{en ? "A selection of products and systems I build across the KORYXA ecosystem." : "Un aperçu des produits et systèmes que je développe au sein de l’écosystème KORYXA."}</p></div><Link className={styles.textLink} href="/work">{en ? "Entire ecosystem" : "Tout l’écosystème"} <span aria-hidden="true">↗</span></Link></div>
          <div className={styles.projectGrid}>{featured.map((project, index) => <article key={project.repo} className={styles.projectCard}><div className={styles.projectTop}><span>{en ? "PROJECT" : "PROJET"} / {String(index+1).padStart(2,"0")}</span><span className={styles.liveState}>{project.status === "Live" ? "● LIVE" : project.status === "Private" ? (en ? "◐ RESTRICTED ACCESS" : "◐ ACCÈS PROTÉGÉ") : (en ? "○ DEMO" : "○ DÉMO")}</span></div><div className={styles.projectMark} aria-hidden="true">{project.name.slice(0,2).toUpperCase()}</div><h3>{project.name}</h3><p>{en ? (englishTaglines[project.name] || project.name) : project.tagline}</p><div className={styles.projectTags}>{project.stack.map((stack) => <span key={stack}>{stack}</span>)}</div><div className={styles.projectActions}>{project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer">{en ? "View product ↗" : "Voir le produit ↗"}</a> : <span>{en ? "Demo upon request" : "Démo sur demande"}</span>}<a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></article>)}</div>
        </section>
        <section className={styles.expertise} aria-labelledby="expertise-title"><div><p className={styles.eyebrow}>{en ? "02 / HOW I BUILD" : "02 / MA MÉTHODE"}</p><h2 id="expertise-title">{en ? <>From concept<br />to <em>production.</em></> : <>De l’idée<br />à la <em>production.</em></>}</h2></div><div className={styles.expertiseRows}><div><span>01</span><strong>{en ? "AI & INTELLIGENCE" : "IA & INTELLIGENCE"}</strong><p>{en ? "LLMs, RAG, agents, vector search, scoring and business automation." : "LLM, RAG, agents, recherche vectorielle, scoring et automatisation métier."}</p></div><div><span>02</span><strong>{en ? "BACKEND ENGINEERING" : "DÉVELOPPEMENT BACKEND"}</strong><p>{en ? "FastAPI, Python, APIs, orchestration and service architecture." : "FastAPI, Python, API, orchestration et architecture de services."}</p></div><div><span>03</span><strong>{en ? "PRODUCT & FRONTEND" : "PRODUIT & FRONTEND"}</strong><p>{en ? "Next.js, TypeScript, SaaS interfaces and responsive web experiences." : "Next.js, TypeScript, interfaces SaaS et expériences web adaptatives."}</p></div></div></section>
        <section className={styles.contactSection}><div><p className={styles.eyebrow}>{en ? "03 / LET’S BUILD" : "03 / COLLABORONS"}</p><h2>{en ? <>Have a challenge?<br /><span>Let’s build it.</span></> : <>Un projet en tête ?<br /><span>Construisons-le.</span></>}</h2><p>{en ? "Available for remote AI Engineering / RAG Engineering missions. Based in Lomé, GMT timezone. Daily rate upon request." : "Disponible pour des missions à distance en ingénierie IA et RAG. Basé à Lomé, fuseau GMT. Tarif journalier sur demande."}</p></div><a href="mailto:ylamadokou@gmail.com?subject=Mission%20AI%20Engineer" className={styles.ctaPrimary}>{en ? "Let’s discuss your project ↗" : "Parlons de votre mission ↗"}</a></section>
        <footer className={styles.footer}><span>© 2026 YAYRA JUNIOR LAMADOKOU</span><span>{en ? "*Contributions reported on profile · Availability checked at a point in time." : "*Contributions déclarées dans le profil · Disponibilités vérifiées lors d’un contrôle ponctuel."}</span><a href="https://github.com/Juniorleriche27" target="_blank" rel="noopener noreferrer">GITHUB ↗</a></footer>
      </div>
    </main>
  );
}
