"use client";
import { ecosystemProjects } from "@/data/projects";
import { useSiteLanguage } from "@/components/LanguageToggle";
import { englishTaglines } from "@/data/project-translations";
import styles from "./LiveEcosystem.module.scss";

export function LiveEcosystem() {
  const en = useSiteLanguage() === "en";
  const live = ecosystemProjects.filter((project) => project.status === "Live").length;
  return (
    <section className={styles.section} aria-labelledby="live-ecosystem-title">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>KORYXA · {en ? "LIVE ECOSYSTEM" : "ÉCOSYSTÈME EN LIGNE"}</p>
        <h2 id="live-ecosystem-title">{en ? "AI products built and deployed." : "Des produits IA construits et déployés."}</h2>
        <p>{ecosystemProjects.length} {en ? "projects" : "projets"} · {live} {en ? "URLs reachable during the last HTTP check · Private demos upon request." : "déploiements accessibles lors du dernier contrôle HTTP · Démos privées sur demande."}</p>
      </div>
      <div className={styles.grid}>
        {ecosystemProjects.map((project) => (
          <article className={styles.card} key={project.repo}>
            <div className={styles.cardTop}>
              <span className={`${styles.status} ${project.status === "Live" ? styles.live : project.status === "Private" ? styles.private : styles.demo}`}>
                {project.status === "Live" ? "● Live" : project.status === "Private" ? (en ? "🔒 Restricted access" : "🔒 Accès protégé") : (en ? "◌ Demo" : "◌ Démo")}
              </span>
              {project.private && <span className={styles.lock} title={en ? "Private source code" : "Code source privé"} aria-label={en ? "Private source code" : "Code source privé"}>🔒 {en ? "Private code" : "Code privé"}</span>}
            </div>
            <h3>{project.name}</h3>
            <p className={styles.description}>{en ? (englishTaglines[project.name] || project.name) : project.tagline}</p>
            <div className={styles.tags} aria-label="Technologies">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className={styles.actions}>
              {project.url ? <a className={styles.primary} href={project.url} target="_blank" rel="noopener noreferrer">{en ? "View live ↗" : "Voir le site ↗"}</a> : <span className={styles.unavailable}>{en ? "Demo upon request" : "Démo sur demande"}</span>}
              <a className={styles.secondary} href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`GitHub : ${project.name}${project.private ? (en ? ', private repository' : ', dépôt privé') : ''}`}>GitHub ↗</a>
            </div>
          </article>
        ))}
      </div>
      <p className={styles.disclaimer}>{en ? "Live indicates that the URL was reachable during the last scan; availability is not guaranteed. Private repositories may require GitHub access." : "En ligne signifie que l’URL répondait lors du dernier contrôle, sans garantie de disponibilité permanente. Les dépôts privés peuvent nécessiter une autorisation GitHub."}</p>
    </section>
  );
}
