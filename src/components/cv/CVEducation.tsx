import { Column, Heading, Row, Text } from "@once-ui-system/core";
import { CVSection } from "./CVSection";
import type { CV } from "@/types";

interface CVEducationProps {
  education: CV["education"];
}

export function CVEducation({ education }: CVEducationProps) {
  return (
    <CVSection title="Études">
      <Column gap="m">
        {education.map((edu, index) => (
          <Column key={index} gap="4">
            <Row horizontal="between" vertical="center" wrap>
              <Column gap="4" flex={1}>
                <Heading variant="heading-strong-m">{edu.degree}</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {edu.institution}
                </Text>
              </Column>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {edu.timeframe}
              </Text>
            </Row>
            {edu.location && (
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {edu.location}
              </Text>
            )}
            {edu.description && (
              <Text variant="body-default-s">{edu.description}</Text>
            )}
            {edu.grade && (
              <Text variant="body-default-xs" onBackground="neutral-weak">
                Mention : {edu.grade}
              </Text>
            )}
          </Column>
        ))}
      </Column>
    </CVSection>
  );
}
