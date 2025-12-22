import { Column, Heading, Row, Tag, Text } from "@once-ui-system/core";
import { CVSection } from "./CVSection";
import type { CV } from "@/types";

interface CVExperienceProps {
  experience: CV["experience"];
}

export function CVExperience({ experience }: CVExperienceProps) {
  return (
    <>
      {/* Work Experience */}
      {experience.work.length > 0 && (
        <CVSection title="Expérience professionnelle">
          <Column gap="l">
            {experience.work.map((work, index) => (
              <Column key={index} gap="8" marginBottom="m">
                <Row horizontal="between" vertical="center" wrap>
                  <Column gap="4" flex={1}>
                    <Heading variant="heading-strong-m">{work.company}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {work.role}
                    </Text>
                  </Column>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {work.timeframe}
                  </Text>
                </Row>
                {work.location && (
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {work.location}
                  </Text>
                )}
                <Column gap="4" as="ul" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {work.achievements.map((achievement, idx) => (
                    <Text key={idx} as="li" variant="body-default-s">
                      • {achievement}
                    </Text>
                  ))}
                </Column>
                {work.technologies && work.technologies.length > 0 && (
                  <Row gap="8" wrap>
                    {work.technologies.map((tech, idx) => (
                      <Tag key={idx} size="s">
                        {tech}
                      </Tag>
                    ))}
                  </Row>
                )}
              </Column>
            ))}
          </Column>
        </CVSection>
      )}

      {/* Projects */}
      {experience.projects.length > 0 && (
        <CVSection title="Projets">
          <Column gap="l">
            {experience.projects.map((project, index) => (
              <Column key={index} gap="8" marginBottom="m">
                <Row horizontal="between" vertical="center" wrap>
                  <Heading variant="heading-strong-m">{project.name}</Heading>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {project.type}
                  </Text>
                </Row>
                <Text variant="body-default-s">{project.description}</Text>
                {project.link && (
                  <Text variant="body-default-xs">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "underline" }}
                    >
                      Voir le projet →
                    </a>
                  </Text>
                )}
                <Row gap="8" wrap>
                  {project.technologies.map((tech, idx) => (
                    <Tag key={idx} size="s">
                      {tech}
                    </Tag>
                  ))}
                </Row>
              </Column>
            ))}
          </Column>
        </CVSection>
      )}
    </>
  );
}
