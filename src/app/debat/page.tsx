import { Column, Heading, Meta, Schema, Text, Button, Row } from "@once-ui-system/core";
import { baseURL, debate, person, about } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: debate.title,
    description: debate.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(debate.title)}`,
    path: debate.path,
  });
}

export default function DebatePage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={debate.path}
        title={debate.title}
        description={debate.description}
        image={`/api/og/generate?title=${encodeURIComponent(debate.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column gap="m">
        <Heading variant="display-strong-l">Débat</Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak">
          Cet espace est dédié aux échanges et aux discussions autour de l’économie, la data et le développement.
        </Text>
        <Row gap="12" wrap>
          <Button href="/blog" variant="secondary" size="m" weight="default" arrowIcon>
            Lire mes articles
          </Button>
          <Button href="/about" variant="tertiary" size="m" weight="default" arrowIcon>
            Voir mon profil
          </Button>
        </Row>
      </Column>
      <Column gap="8">
        <Heading variant="heading-strong-m">À venir</Heading>
        <Text variant="body-default-m">
          Je prépare un format de débats (sujets, règles et participation). Bientôt disponible.
        </Text>
      </Column>
    </Column>
  );
}
