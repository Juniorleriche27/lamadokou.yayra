import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Line,
  Meta,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import { baseURL, about, person, social, cv } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import { slugify } from "@/utils/slug";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const displayLocation = person.locationLabel ?? person.location;

  const structure = [
    { title: "Profil", display: cv.profile.summary.length > 0, items: [] },
    {
      title: "Compétences",
      display: cv.skills.technical.length > 0,
      items: cv.skills.technical.map((category) => category.category),
    },
    {
      title: "Expérience professionnelle",
      display: cv.experience.work.length > 0,
      items: cv.experience.work.map((work) => work.company),
    },
    {
      title: "Projets",
      display: cv.experience.projects.length > 0,
      items: cv.experience.projects.map((project) => project.name),
    },
    {
      title: "Formation",
      display: cv.education.length > 0,
      items: cv.education.map((education) => education.degree),
    },
    {
      title: "Certifications",
      display: cv.certifications.length > 0,
      items: cv.certifications.map((certification) => certification.name),
    },
  ];

  return (
    <Column maxWidth="l" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth gap="xl" s={{ direction: "column" }}>
        {about.tableOfContent.display && (
          <Column flex={2} s={{ hide: true }} style={{ maxWidth: "240px" }}>
            <TableOfContents structure={structure} about={about} />
          </Column>
        )}

        <Column flex={8} fillWidth gap="xl">
        <Row fillWidth gap="xl" s={{ direction: "column" }} vertical="center">
          <Column flex={4} gap="m" horizontal="center">
            <Avatar src={person.avatar} size="xl" />
            <Heading variant="heading-strong-l" align="center">
              {person.name}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak" align="center">
              {person.role}
            </Text>
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              <Text variant="body-default-s">{displayLocation}</Text>
            </Row>
            {cv.languages.length > 0 && (
              <Column gap="8" fillWidth>
                <Text variant="label-default-s" onBackground="neutral-weak" align="center">
                  Langues
                </Text>
                <Row wrap gap="8" horizontal="center">
                  {cv.languages.map((language, index) => (
                    <Tag key={index} size="l">
                      {language.name}
                    </Tag>
                  ))}
                </Row>
              </Column>
            )}
            {social.length > 0 && (
              <Column gap="8" fillWidth paddingTop="m">
                <Text variant="label-default-s" onBackground="neutral-weak" align="center">
                  Contact
                </Text>
                <Row wrap gap="8" horizontal="center">
                  {social
                    .filter((item) => item.essential)
                    .map(
                      (item) =>
                        item.link && (
                          <IconButton
                            key={item.name}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                            size="m"
                            tooltip={item.name}
                          />
                        ),
                    )}
                </Row>
              </Column>
            )}
            <Row gap="12" wrap horizontal="center">
              <Button
                href="/cv.pdf"
                variant="primary"
                size="s"
                weight="default"
                prefixIcon="document"
                target="_blank"
              >
                Télécharger mon CV
              </Button>
              <Button href="/work" variant="secondary" size="s" weight="default" arrowIcon>
                Voir mes projets
              </Button>
            </Row>
          </Column>

          <Column flex={8} gap="m">
            <Heading id={slugify("Profil")} variant="display-strong-s">
              Profil
            </Heading>
            <Column gap="8">
              {cv.profile.summary.map((paragraph, index) => (
                <Text key={index} variant="body-default-m" onBackground="neutral-weak">
                  {paragraph}
                </Text>
              ))}
            </Column>
          </Column>
        </Row>

        <Line />

        <Column gap="xl">
          <Column gap="m">
            <Heading id={slugify("Compétences")} variant="display-strong-s">
              Compétences
            </Heading>
            <Column gap="l">
              {cv.skills.technical.map((category, index) => (
                <Column key={index} gap="8">
                  <Text variant="heading-strong-m">{category.category}</Text>
                  <Row wrap gap="8">
                    {category.items.map((item, itemIndex) => (
                      <Tag key={itemIndex} size="m">
                        {item}
                      </Tag>
                    ))}
                  </Row>
                </Column>
              ))}
            </Column>
          </Column>

          {cv.experience.work.length > 0 && (
            <Column gap="m">
              <Heading id={slugify("Expérience professionnelle")} variant="display-strong-s">
                Expérience professionnelle
              </Heading>
              <Column gap="l">
                {cv.experience.work.map((work, index) => (
                  <Column key={index} gap="8">
                    <Row horizontal="between" vertical="center" wrap>
                      <Heading variant="heading-strong-m">{work.company}</Heading>
                      <Text variant="body-default-xs" onBackground="neutral-weak">
                        {work.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {work.role}
                    </Text>
                    <Column as="ul" gap="8" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {work.achievements.map((achievement, itemIndex) => (
                        <Text key={itemIndex} as="li" variant="body-default-s">
                          - {achievement}
                        </Text>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </Column>
          )}

          {cv.experience.projects.length > 0 && (
            <Column gap="m">
              <Heading id={slugify("Projets")} variant="display-strong-s">
                Projets
              </Heading>
              <Column gap="l">
                {cv.experience.projects.map((project, index) => (
                  <Column key={index} gap="8">
                    <Row horizontal="between" vertical="center" wrap>
                      <Heading variant="heading-strong-m">{project.name}</Heading>
                      <Text variant="body-default-xs" onBackground="neutral-weak">
                        {project.type}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {project.description}
                    </Text>
                    {project.link && (
                      <Button
                        href={project.link}
                        variant="tertiary"
                        size="s"
                        weight="default"
                        arrowIcon
                        target="_blank"
                      >
                        Voir le dépôt
                      </Button>
                    )}
                  </Column>
                ))}
              </Column>
            </Column>
          )}

          {cv.education.length > 0 && (
            <Column gap="m">
              <Heading id={slugify("Formation")} variant="display-strong-s">
                Formation
              </Heading>
              <Column gap="l">
                {cv.education.map((education, index) => (
                  <Column key={index} gap="4">
                    <Row horizontal="between" vertical="center" wrap>
                      <Heading variant="heading-strong-m">{education.degree}</Heading>
                      <Text variant="body-default-xs" onBackground="neutral-weak">
                        {education.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {education.institution}
                    </Text>
                    {education.description && (
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {education.description}
                      </Text>
                    )}
                  </Column>
                ))}
              </Column>
            </Column>
          )}

          {cv.certifications.length > 0 && (
            <Column gap="m">
              <Heading id={slugify("Certifications")} variant="display-strong-s">
                Certifications
              </Heading>
              <Column gap="8">
                {cv.certifications.map((certification, index) => (
                  <Row key={index} gap="8" vertical="center" wrap>
                    <Text variant="body-default-s">
                      {certification.name}
                      {certification.issuer && ` - ${certification.issuer}`}
                    </Text>
                    {certification.link && (
                      <Button
                        href={certification.link}
                        variant="tertiary"
                        size="s"
                        weight="default"
                        arrowIcon
                        target="_blank"
                      >
                        Voir le certificat
                      </Button>
                    )}
                  </Row>
                ))}
              </Column>
            </Column>
          )}
        </Column>
        </Column>
      </Row>
    </Column>
  );
}
