import { Column, Heading, Meta, Schema, Text, Button, Row } from "@once-ui-system/core";
import { baseURL, blog, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="m">
        <Heading variant="heading-strong-xl">{blog.title}</Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak">
          Les articles arrivent bientôt. Je prépare des analyses et des notes personnelles à publier ici.
        </Text>
        <Row gap="12" wrap>
          <Button href="/about" variant="secondary" size="m" weight="default" arrowIcon>
            Voir mon profil
          </Button>
          <Button href="/work" variant="tertiary" size="m" weight="default" arrowIcon>
            Voir mes projets
          </Button>
        </Row>
      </Column>
    </Column>
  );
}
