import { ecosystemProjects } from "@/data/projects";
import styles from "./LiveEcosystem.module.scss";

export function LiveEcosystem() {
  const live = ecosystemProjects.filter((project) => project.status === "Live").length;
  return (
    <section className={styles.section} aria-labelledby="live-ecosystem-title">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>KORYXA · LIVE ECOSYSTEM</p>
        <h2 id="live-ecosystem-title">Des produits IA construits et déployés.</h2>
        <p>{ecosystemProjects.length} projets · {live} déploiements accessibles lors du dernier contrôle HTTP · Démos privées sur demande.</p>
      </div>
      <div className={styles.grid}>
        {ecosystemProjects.map((project) => (
          <article className={styles.card} key={project.repo}>
            <div className={styles.cardTop}>
              <span className={`${styles.status} ${project.status === "Live" ? styles.live : project.status === "Private" ? styles.private : styles.demo}`}>
                {project.status === "Live" ? "● Live" : project.status === "Private" ? "🔒 Accès protégé" : "◌ Démo"}
              </span>
              {project.private && <span className={styles.lock} title="Code source privé" aria-label="Code source privé">🔒 Code privé</span>}
            </div>
            <h3>{project.name}</h3>
            <p className={styles.description}>{project.tagline}</p>
            <div className={styles.tags} aria-label="Technologies">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className={styles.actions}>
              {project.url ? <a className={styles.primary} href={project.url} target="_blank" rel="noopener noreferrer">Voir Live ↗</a> : <span className={styles.unavailable}>Démo sur demande</span>}
              <a className={styles.secondary} href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`GitHub : ${project.name}${project.private ? ', dépôt privé' : ''}`}>GitHub ↗</a>
            </div>
          </article>
        ))}
      </div>
      <p className={styles.disclaimer}>Live = URL accessible lors du dernier scan, sans garantie de disponibilité permanente. Les dépôts privés peuvent nécessiter une autorisation GitHub.</p>
    </section>
  );
}
