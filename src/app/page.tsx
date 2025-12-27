import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Card,
  Tag,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="l" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <RevealFx translateY={6} fillWidth>
        <Row fillWidth gap="xl" s={{ direction: "column" }} vertical="center">
          <Column flex={7} gap="m">
            {home.featured.display && (
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            )}
            <Heading wrap="balance" variant="display-strong-xl">
              {home.headline}
            </Heading>
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
              {home.subline}
            </Text>
            <Row gap="12" wrap>
              <Button data-border="rounded" href="/work" variant="primary" size="m" weight="default">
                Voir mes projets
              </Button>
              <Button
                data-border="rounded"
                href="/cv.pdf"
                variant="secondary"
                size="m"
                weight="default"
                prefixIcon="document"
                target="_blank"
              >
                Télécharger mon CV
              </Button>
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="ghost"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar
                      marginRight="8"
                      style={{ marginLeft: "-0.75rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {about.label}
                </Row>
              </Button>
            </Row>
            <Row gap="8" wrap>
              <Tag size="l">Python</Tag>
              <Tag size="l">R</Tag>
              <Tag size="l">Stata</Tag>
              <Tag size="l">Économétrie</Tag>
              <Tag size="l">Data Engineering</Tag>
            </Row>
          </Column>
          <Column flex={5} fillWidth>
            <Card
              fillWidth
              padding="l"
              radius="l-4"
              border="neutral-alpha-weak"
              background="page"
              shadow="m"
            >
              <Column gap="12">
                <Text variant="label-default-s" onBackground="neutral-weak">
                  En ce moment
                </Text>
                <Heading variant="heading-strong-m">Axes de travail</Heading>
                <Column as="ul" gap="8" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <Text as="li" variant="body-default-s">
                    • Tableau de bord emploi à partir de données publiques
                  </Text>
                  <Text as="li" variant="body-default-s">
                    • Analyses EdTech et éducation (EdStats)
                  </Text>
                  <Text as="li" variant="body-default-s">
                    • KORYXA : compétences, formation et emploi
                  </Text>
                </Column>
                <Button href={about.path} variant="secondary" size="s" weight="default">
                  Profil complet
                </Button>
              </Column>
            </Card>
          </Column>
        </Row>
      </RevealFx>
      <RevealFx translateY={16} delay={0.4} fillWidth>
        <Column fillWidth gap="24">
          <Row fillWidth horizontal="between" vertical="center" s={{ direction: "column" }}>
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Projets récents
            </Heading>
            <Button href="/work" variant="ghost" size="s" weight="default" arrowIcon>
              Voir tous les projets
            </Button>
          </Row>
          <Projects range={[1, 3]} />
        </Column>
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Derniers articles
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
        </Column>
      )}
    </Column>
  );
}
