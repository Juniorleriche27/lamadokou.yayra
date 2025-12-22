import { Column, Heading, Meta, Row, Schema, Text, Line } from "@once-ui-system/core";
import { baseURL, person, cv, social } from "@/resources";
import {
  CVContact,
  CVProfile,
  CVExperience,
  CVEducation,
  CVSkills,
  CVCertifications,
  CVLanguages,
  CVActivities,
} from "@/components/cv";
import styles from "@/components/cv/cv.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: cv.title,
    description: cv.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(cv.title)}`,
    path: cv.path,
  });
}

export default function CVPage() {
  return (
    <Column
      className={styles.cvContainer}
      maxWidth="xl"
      paddingY="l"
      paddingX="l"
      style={{
        maxWidth: "210mm",
        minHeight: "297mm",
        backgroundColor: "var(--page-background)",
        margin: "0 auto",
      }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={cv.title}
        description={cv.description}
        path={cv.path}
        image={`/api/og/generate?title=${encodeURIComponent(cv.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth gap="l" s={{ direction: "column" }}>
        {/* Colonne gauche */}
        <Column
          flex={3}
          gap="l"
          paddingRight="l"
          borderRight="neutral-alpha-medium"
          className={styles.cvLeftColumn}
        >
          {/* Identité */}
          <Column gap="m" className="cv-section">
            <Heading variant="display-strong-l">{person.name}</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {person.role}
            </Text>
            <Line />
          </Column>

          {/* Contact */}
          <CVContact person={person} social={social} />

          {/* Langues */}
          {cv.languages.length > 0 && <CVLanguages languages={cv.languages} />}

          {/* Compétences */}
          <CVSkills skills={cv.skills} />

          {/* Certifications */}
          {cv.certifications.length > 0 && (
            <CVCertifications certifications={cv.certifications} />
          )}

        </Column>

        {/* Colonne droite */}
        <Column flex={7} gap="l" className={styles.cvRightColumn}>
          {/* Profil */}
          <div className="cv-section cv-main-section">
            <CVProfile summary={cv.profile.summary} />
          </div>

          {/* Expérience et Projets */}
          <div className="cv-section cv-main-section">
            <CVExperience experience={cv.experience} />
          </div>

          {/* Études */}
          <div className="cv-section cv-main-section">
            <CVEducation education={cv.education} />
          </div>

          {/* Activités */}
          {cv.activities && cv.activities.length > 0 && (
            <div className="cv-section cv-main-section">
              <CVActivities activities={cv.activities} />
            </div>
          )}
        </Column>
      </Row>
    </Column>
  );
}

