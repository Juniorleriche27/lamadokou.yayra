"use client";
import Link from "next/link";
import { useSiteLanguage } from "@/components/LanguageToggle";
import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";

import { LiveEcosystem } from "@/components/work/LiveEcosystem";
import { ecosystemProjects } from "@/data/projects";
import styles from "./work.module.scss";

export default function WorkExperience({ children }: { children: React.ReactNode }) {
  const en = useSiteLanguage() === "en";
  return (
    <main className={styles.workPage}>
      <Schema as="webPage" baseURL={baseURL} path={work.path} title={work.title} description={work.description} image={`/api/og/generate?title=${encodeURIComponent(work.title)}`} author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }} />
      <div className={styles.wrap}>
        <section className={styles.hero}>
          <div className={styles.kicker}><span className={styles.liveDot} /> {en ? "BUILDING THE FUTURE / ONE PRODUCT AT A TIME" : "CONSTRUIRE L’AVENIR / UN PRODUIT À LA FOIS"}</div>
          <p className={styles.label}>{en ? "THE PORTFOLIO / 2026" : "LE PORTFOLIO / 2026"}</p>
          <h1>{en ? <>Real work.<br /><span>Real products.</span></> : <>Des projets concrets.<br /><span>Des produits réels.</span></>}</h1>
          <p className={styles.description}>{en ? "A collection of AI systems, SaaS applications and business tools. From risk engines to voice AI, discover what I build." : "Une collection de systèmes IA, d’applications SaaS et d’outils métier. Du moteur de risque à l’IA vocale, découvrez ce qui se construit au quotidien."}</p>
          <div className={styles.actions}><a className={styles.primary} href="#ecosystem">{en ? "Explore the ecosystem ↘" : "Explorer l’écosystème ↘"}</a><Link className={styles.secondary} href="/">{en ? "← Back home" : "← Retour à l’accueil"}</Link></div>
          <div className={styles.metrics}><div><strong>{ecosystemProjects.length}</strong><span>{en ? "PROJECTS" : "PROJETS"}</span></div><div><strong>{ecosystemProjects.filter(p=>p.status==='Live').length}</strong><span>{en ? "URLS REACHABLE AT SCAN" : "URLS ACCESSIBLES AU SCAN"}</span></div><div><strong>GMT</strong><span>{en ? "REMOTE WORLDWIDE" : "À DISTANCE"}</span></div></div>
        </section>
        <div id="ecosystem" className={styles.catalogue}><LiveEcosystem /></div>
        <section className={styles.archive} aria-label={en ? "Case studies" : "Études de cas"}><div className={styles.archiveHeader}><p>{en ? "BEHIND THE BUILD" : "DANS LES COULISSES"}</p><h2>{en ? "Case studies & research." : "Études de cas & recherches."}</h2><span>{en ? "Detailed projects, experiments and data research." : "Projets détaillés, expérimentations et travaux data."}</span></div>{children}</section>
        <div className={styles.footer}>{en ? "INTERESTED IN COLLABORATING?" : "ENVIE DE COLLABORER ?"} <a href="mailto:ylamadokou@gmail.com?subject=Mission%20AI%20Engineer">{en ? "LET’S TALK ↗" : "DISCUTONS ↗"}</a></div>
      </div>
    </main>
  );
}
