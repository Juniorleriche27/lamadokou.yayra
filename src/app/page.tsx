import Link from "next/link";
import { Meta, Schema } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { ecosystemProjects } from "@/data/projects";
import styles from "./portfolio.module.scss";

export async function generateMetadata() {
  return Meta.generate({ title: "Yayra Junior Lamadokou — AI Engineer & Product Builder", description: "Je conçois et déploie des produits IA de bout en bout : FastAPI, Next.js, RAG, LLM et automatisation.", baseURL, path: home.path, image: home.image });
}

const selectedNames = ["MERQALOR CREDIT", "CAURI / Voice-to-Ledger", "DevBridge", "CoraBiz", "EnergiSight", "Mataki"];

export default function Home() {
  const featured = selectedNames.map((name) => ecosystemProjects.find((item) => item.name === name)).filter((item) => item !== undefined);
  const live = ecosystemProjects.filter((project) => project.status === "Live").length;
  return (
    <main className={styles.portfolio}>
      <Schema as="webPage" baseURL={baseURL} path={home.path} title={home.title} description={home.description} image={`/api/og/generate?title=${encodeURIComponent(home.title)}`} author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }} />
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.container}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroContent}>
            <div className={styles.availability}><span className={styles.pulse} /> AVAILABLE FOR REMOTE MISSIONS <span className={styles.availabilityDivider}>/</span> GMT · UTC+0</div>
            <p className={styles.eyebrow}>YAYRA JUNIOR LAMADOKOU <span>— AI ENGINEER & PRODUCT BUILDER</span></p>
            <h1 id="hero-title">I build AI products<br />that <span>actually ship<span className={styles.period}>.</span></span></h1>
            <p className={styles.heroDescription}>De l’idée au produit en ligne. Je conçois des expériences IA utiles, des moteurs backend robustes et des applications prêtes à être utilisées — pas seulement des prototypes.</p>
            <div className={styles.heroActions}>
              <Link className={styles.ctaPrimary} href="/work">Explorer mes projets <span aria-hidden="true">↗</span></Link>
              <a className={styles.ctaSecondary} href="mailto:ylamadokou@gmail.com?subject=Mission%20AI%20Engineer">Discutons de votre projet <span aria-hidden="true">↗</span></a>
            </div>
            <div className={styles.techLine}><span>CORE STACK</span><span>FASTAPI</span><span>NEXT.JS</span><span>PYTHON</span><span>RAG / LLM</span><span>STT</span></div>
          </div>
          <aside className={styles.heroAside} aria-label="Indicateurs du portfolio">
            <div className={styles.panelTop}><span className={styles.orbit} /> SYSTEM STATUS <span className={styles.systemOnline}>● OPERATIONAL</span></div>
            <div className={styles.visualCore}><div className={styles.coreRing}><div className={styles.coreRingInner}><span>YL</span></div></div><span className={styles.coreCaption}>ENGINEERING REAL-WORLD AI</span></div>
            <div className={styles.metricGrid}>
              <div><strong>{ecosystemProjects.length.toString().padStart(2,"0")}</strong><span>PROJETS RECENSÉS</span></div>
              <div><strong>{live.toString().padStart(2,"0")}</strong><span>URLS ACCESSIBLES AU SCAN</span></div>
              <div><strong>3,182</strong><span>CONTRIBUTIONS / AN*</span></div>
              <div><strong>GMT</strong><span>REMOTE FIRST</span></div>
            </div>
          </aside>
        </section>
        <div className={styles.ticker} aria-label="Expertises"><span>AI ENGINEERING</span><i /> <span>FULL-STACK PRODUCTS</span><i /> <span>RAG & AGENTS</span><i /> <span>VOICE AUTOMATION</span><i /> <span>DATA INTELLIGENCE</span></div>
        <section className={styles.workSection} aria-labelledby="featured-title">
          <div className={styles.sectionIntro}><div><p className={styles.eyebrow}>01 / SELECTED WORK</p><h2 id="featured-title">Built, tested, <em>deployed.</em></h2><p>Un aperçu des produits et systèmes que je développe au sein de l’écosystème KORYXA.</p></div><Link className={styles.textLink} href="/work">Tout l’écosystème <span aria-hidden="true">↗</span></Link></div>
          <div className={styles.projectGrid}>{featured.map((project, index) => <article key={project.repo} className={styles.projectCard}><div className={styles.projectTop}><span>PROJECT / {String(index+1).padStart(2,"0")}</span><span className={styles.liveState}>{project.status === "Live" ? "● LIVE" : project.status === "Private" ? "◐ ACCÈS PROTÉGÉ" : "○ DÉMO"}</span></div><div className={styles.projectMark} aria-hidden="true">{project.name.slice(0,2).toUpperCase()}</div><h3>{project.name}</h3><p>{project.tagline}</p><div className={styles.projectTags}>{project.stack.map((stack) => <span key={stack}>{stack}</span>)}</div><div className={styles.projectActions}>{project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer">Voir le produit ↗</a> : <span>Démo sur demande</span>}<a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></article>)}</div>
        </section>
        <section className={styles.expertise} aria-labelledby="expertise-title"><div><p className={styles.eyebrow}>02 / HOW I BUILD</p><h2 id="expertise-title">From concept<br />to <em>production.</em></h2></div><div className={styles.expertiseRows}><div><span>01</span><strong>AI & INTELLIGENCE</strong><p>LLM, RAG, agents, vector search, scoring et automatisation métier.</p></div><div><span>02</span><strong>BACKEND ENGINEERING</strong><p>FastAPI, Python, APIs, orchestration, architecture de services.</p></div><div><span>03</span><strong>PRODUCT & FRONTEND</strong><p>Next.js, TypeScript, interfaces SaaS, expériences web responsive.</p></div></div></section>
        <section className={styles.contactSection}><div><p className={styles.eyebrow}>03 / LET'S BUILD</p><h2>Have a challenge?<br /><span>Let's ship it.</span></h2><p>Disponible pour des missions remote AI Engineer / RAG Engineer. Basé à Lomé, fuseau GMT. TJM sur demande.</p></div><a href="mailto:ylamadokou@gmail.com?subject=Mission%20AI%20Engineer" className={styles.ctaPrimary}>Parlons de votre mission ↗</a></section>
        <footer className={styles.footer}><span>© 2026 YAYRA JUNIOR LAMADOKOU</span><span>*Contributions déclarées dans le profil · Statuts live vérifiés lors d’un scan ponctuel.</span><a href="https://github.com/Juniorleriche27" target="_blank" rel="noopener noreferrer">GITHUB ↗</a></footer>
      </div>
    </main>
  );
}
