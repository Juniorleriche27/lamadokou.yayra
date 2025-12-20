import { Column, Heading, Meta, Schema, Text, Button, Row, RevealFx } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
        <Column maxWidth="s" horizontal="center" align="center" gap="m">
          <Heading variant="display-strong-l" align="center" wrap="balance">
            {work.title}
          </Heading>
          <Text
            variant="heading-default-m"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
          >
            {work.description}
          </Text>
          <Button
            href="/cv.pdf"
            variant="secondary"
            size="m"
            weight="default"
            prefixIcon="document"
            target="_blank"
            marginTop="m"
          >
            Télécharger mon CV
          </Button>
        </Column>
      </RevealFx>
      <Projects />
    </Column>
  );
}
