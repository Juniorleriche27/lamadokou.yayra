import Link from "next/link";
import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { LiveEcosystem } from "@/components/work/LiveEcosystem";
import { ecosystemProjects } from "@/data/projects";
import styles from "./work.module.scss";

export async function generateMetadata() {
  return Meta.generate({ title: "Live Ecosystem — Yayra Junior Lamadokou", description: "Découvrez les applications IA, SaaS, plateformes et APIs de l’écosystème KORYXA.", baseURL, image: `/api/og/generate?title=${encodeURIComponent(work.title)}`, path: work.path });
}

export default function Work() {
  return (
    <main className={styles.workPage}>
      <Schema as="webPage" baseURL={baseURL} path={work.path} title={work.title} description={work.description} image={`/api/og/generate?title=${encodeURIComponent(work.title)}`} author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }} />
      <div className={styles.wrap}>
        <section className={styles.hero}>
          <div className={styles.kicker}><span className={styles.liveDot} /> BUILDING THE FUTURE / ONE PRODUCT AT A TIME</div>
          <p className={styles.label}>THE PORTFOLIO / 2026</p>
          <h1>Real work.<br /><span>Real products.</span></h1>
          <p className={styles.description}>Une collection de systèmes IA, d’applications SaaS et d’outils métier. Du moteur de risque à l’IA vocale, découvrez ce qui se construit au quotidien.</p>
          <div className={styles.actions}><a className={styles.primary} href="#ecosystem">Explorer l’écosystème ↘</a><Link className={styles.secondary} href="/">← Retour à l’accueil</Link></div>
          <div className={styles.metrics}><div><strong>{ecosystemProjects.length}</strong><span>PROJETS</span></div><div><strong>{ecosystemProjects.filter(p=>p.status==='Live').length}</strong><span>URLS ACCESSIBLES AU SCAN</span></div><div><strong>GMT</strong><span>REMOTE WORLDWIDE</span></div></div>
        </section>
        <div id="ecosystem" className={styles.catalogue}><LiveEcosystem /></div>
        <section className={styles.archive} aria-label="Études de cas"><div className={styles.archiveHeader}><p>BEHIND THE BUILD</p><h2>Études de cas & recherches.</h2><span>Projets détaillés, expérimentations et travaux data.</span></div><Projects /></section>
        <div className={styles.footer}>INTERESTED IN COLLABORATING? <a href="mailto:ylamadokou@gmail.com?subject=Mission%20AI%20Engineer">LET'S TALK ↗</a></div>
      </div>
    </main>
  );
}
