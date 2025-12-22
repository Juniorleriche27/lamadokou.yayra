import { Column, Text } from "@once-ui-system/core";
import { CVSection } from "./CVSection";
import type { CV } from "@/types";

interface CVSkillsProps {
  skills: CV["skills"];
}

export function CVSkills({ skills }: CVSkillsProps) {
  return (
    <CVSection title="Compétences" titleVariant="heading-strong-s">
      <Column gap="m">
        {skills.technical.map((category, index) => (
          <Column key={index} gap="8">
            <Text variant="body-default-s" weight="strong">
              {category.category}
            </Text>
            <Column gap="8" as="ul" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {category.items.map((item, idx) => (
                <Text key={idx} as="li" variant="body-default-s">
                  • {item}
                </Text>
              ))}
            </Column>
          </Column>
        ))}
        {skills.soft && skills.soft.length > 0 && (
          <Column gap="8">
            <Text variant="body-default-s" weight="strong">
              Compétences transversales
            </Text>
            <Column gap="8" as="ul" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {skills.soft.map((skill, idx) => (
                <Text key={idx} as="li" variant="body-default-s">
                  • {skill}
                </Text>
              ))}
            </Column>
          </Column>
        )}
      </Column>
    </CVSection>
  );
}
