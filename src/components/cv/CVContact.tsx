import { Column, Heading, IconButton, Row, Text } from "@once-ui-system/core";
import { CVSection } from "./CVSection";
import type { Person, Social } from "@/types";

interface CVContactProps {
  person: Person;
  social: Social;
}

export function CVContact({ person, social }: CVContactProps) {
  const displayLocation = person.locationLabel ?? person.location;

  return (
    <CVSection title="Contact" titleVariant="heading-strong-s">
      <Column gap="8">
        <Row gap="8" vertical="center">
          <Text variant="body-default-s">{person.email}</Text>
        </Row>
        <Row gap="8" vertical="center">
          <Text variant="body-default-s">{displayLocation}</Text>
        </Row>
        {social.length > 0 && (
          <Row gap="8" wrap>
            {social
              .filter((item) => item.essential)
              .map(
                (item) =>
                  item.link && (
                    <IconButton
                      key={item.name}
                      href={item.link}
                      icon={item.icon}
                      variant="ghost"
                      size="s"
                      tooltip={item.name}
                    />
                  ),
              )}
          </Row>
        )}
      </Column>
    </CVSection>
  );
}
