import { Column, Row, Tag, Text } from "@once-ui-system/core";
import { CVSection } from "./CVSection";
import type { CV } from "@/types";

interface CVLanguagesProps {
  languages: CV["languages"];
}

export function CVLanguages({ languages }: CVLanguagesProps) {
  if (languages.length === 0) return null;

  return (
    <CVSection title="Langues" titleVariant="heading-strong-s">
      <Column gap="8">
        {languages.map((lang, index) => (
          <Row key={index} horizontal="between" vertical="center" wrap>
            <Text variant="body-default-s">{lang.name}</Text>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              {lang.level}
            </Text>
          </Row>
        ))}
      </Column>
    </CVSection>
  );
}
