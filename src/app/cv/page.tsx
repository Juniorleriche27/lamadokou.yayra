import {
  Column,
  Heading,
  Icon,
  Line,
  Meta,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";

import { baseURL, cv, person, social } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: cv.title,
    description: cv.description,
    baseURL: baseURL,
    path: cv.path,
    image: `/api/og/generate?title=${encodeURIComponent(cv.title)}`,
  });
}

export default function CvPage() {
  const essentialSocial = social.filter((item) => item.essential);

  return (
    <Column maxWidth="90" gap="l" padding="m" horizontal="center">
      <Schema
        as="person"
        baseURL={baseURL}
        title={cv.title}
        description={cv.description}
        path={cv.path}
        image={`/api/og/generate?title=${encodeURIComponent(cv.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${cv.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column
        background="surface-strong"
        border="neutral-medium"
        radius="l"
        shadow="l"
        padding="xl"
        gap="xl"
        style={{ width: "100%", maxWidth: "1100px" }}
      >
        <Row fillWidth horizontal="between" vertical="center" wrap gap="m">
          <Column gap="8">
            <Heading variant="display-strong-s">{person.name}</Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              {person.role}
            </Text>
            <Row gap="8" vertical="center">
              <Icon name="globe" onBackground="accent-weak" />
              <Text variant="body-default-m">{person.location}</Text>
            </Row>
          </Column>
          <Column gap="8" align="end" s={{ align: "start" }}>
            <Text variant="label-default-s" onBackground="neutral-weak">
              Contact
            </Text>
            <Column gap="4" align="end" s={{ align: "start" }}>
              <Row gap="8" vertical="center">
                <Icon name="email" onBackground="brand-weak" />
                <Text variant="body-default-m">{person.email}</Text>
              </Row>
              {essentialSocial.map(
                (item) =>
                  item.link && (
                    <Row key={item.name} gap="8" vertical="center">
                      <Icon name={item.icon} onBackground="brand-weak" />
                      <Text as="a" href={item.link} variant="body-default-m">
                        {item.name}
                      </Text>
                    </Row>
                  ),
              )}
            </Column>
          </Column>
        </Row>

        <Row fillWidth gap="xl" wrap>
          <Column gap="l" flex={4} minWidth={280}>
            <Column gap="8">
              <Heading as="h2" variant="heading-strong-l">
                Contact
              </Heading>
              <Line background="neutral-alpha-medium" />
              <Column gap="8">
                <Row gap="8" vertical="center">
                  <Icon name="email" onBackground="brand-weak" />
                  <Text>{person.email}</Text>
                </Row>
                <Row gap="8" vertical="center">
                  <Icon name="globe" onBackground="brand-weak" />
                  <Text>{person.location}</Text>
                </Row>
              </Column>
            </Column>

            <Column gap="8">
              <Heading as="h2" variant="heading-strong-l">
                Langues
              </Heading>
              <Line background="neutral-alpha-medium" />
              <Row wrap gap="8">
                {person.languages?.map((language) => (
                  <Tag key={language} size="m">
                    {language}
                  </Tag>
                ))}
              </Row>
            </Column>

            <Column gap="8">
              <Heading as="h2" variant="heading-strong-l">
                Compétences
              </Heading>
              <Line background="neutral-alpha-medium" />
              <Row wrap gap="8">
                {["Éco appliquée", "Stat/économétrie", "Python data", "ML", "Cadrage projet"].map(
                  (skill) => (
                    <Tag key={skill} size="m">
                      {skill}
                    </Tag>
                  ),
                )}
              </Row>
            </Column>

            <Column gap="8">
              <Heading as="h2" variant="heading-strong-l">
                Certifications
              </Heading>
              <Line background="neutral-alpha-medium" />
              <Column gap="8">
                <Text as="a" href="https://www.coursera.org/specializations/machine-learning-introduction">
                  Introduction to Machine Learning (Coursera)
                </Text>
                <Text as="a" href="https://www.datacamp.com/tracks/data-scientist-with-python">
                  Data Scientist with Python (DataCamp)
                </Text>
                <Text as="a" href="https://www.coursera.org/specializations/statistics-with-python">
                  Statistics with Python (Coursera)
                </Text>
              </Column>
            </Column>
          </Column>

          <Column gap="xl" flex={8} minWidth={320}>
            <Column gap="12">
              <Heading as="h2" variant="heading-strong-l">
                Profil
              </Heading>
              <Line background="neutral-alpha-medium" />
              <Text variant="body-default-m" onBackground="neutral-weak">
                Économiste de formation, spécialisé(e) en statistique et économétrie. J’analyse les
                dynamiques micro et macro pour éclairer les décisions publiques et privées, en
                m’appuyant sur des modèles rigoureux.
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Aujourd’hui, je mets la data et le machine learning au service de la réduction du
                chômage des jeunes en Afrique, via des pipelines reproductibles et des outils
                accessibles (tableaux de bord, assistants LLM, notebooks documentés).
              </Text>
            </Column>

            <Column gap="12">
              <Heading as="h2" variant="heading-strong-l">
                Projets
              </Heading>
              <Line background="neutral-alpha-medium" />
              <Column gap="12">
                <Column gap="4">
                  <Text variant="heading-strong-m">Tableau de bord emploi (ML)</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Pipeline data → features → modèles (régressions, arbres, boosting) pour suivre et
                    prévoir les indicateurs d’emploi ; visualisations interactives.
                  </Text>
                </Column>
                <Column gap="4">
                  <Text variant="heading-strong-m">Assistant LLM pour la veille</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Prompts structurés pour résumer articles/rapports, extraction d’insights et
                    génération de plans d’action intégrés dans des briefs.
                  </Text>
                </Column>
                <Column gap="4">
                  <Text variant="heading-strong-m">Analyses économiques</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Études quantitatives (micro, macro, développement) avec R / Stata : estimation,
                    tests d’hypothèses, interprétation et limites.
                  </Text>
                </Column>
                <Column gap="4">
                  <Text variant="heading-strong-m">Notebooks reproductibles</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Documentation pas-à-pas : nettoyage, visualisation, modèles et suivi des métriques
                    (cross-validation, RMSE/MAE).
                  </Text>
                </Column>
              </Column>
            </Column>

            <Column gap="12">
              <Heading as="h2" variant="heading-strong-l">
                Études
              </Heading>
              <Line background="neutral-alpha-medium" />
              <Column gap="8">
                <Column gap="4">
                  <Text variant="heading-strong-m">Université (économie / data)</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Économie appliquée, statistique avancée, économétrie, analyse de données.
                  </Text>
                </Column>
                <Column gap="4">
                  <Text variant="heading-strong-m">Formations en ligne</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Python, visualisation, machine learning, pratiques notebooks et data pipelines.
                  </Text>
                </Column>
              </Column>
            </Column>

            <Column gap="12">
              <Heading as="h2" variant="heading-strong-l">
                Activités
              </Heading>
              <Line background="neutral-alpha-medium" />
              <Column gap="8">
                <Column gap="4">
                  <Text variant="heading-strong-m">KORYXA (plateforme emploi)</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Initiative pour connecter compétences, formation et opportunités pour les jeunes
                    en Afrique.
                  </Text>
                </Column>
                <Column gap="4">
                  <Text variant="heading-strong-m">Groupes data / communautés</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Participation à des ateliers et revues de notebooks, partage de pratiques sur la
                    préparation de données et l’évaluation de modèles.
                  </Text>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
