import { Column, Text } from "@once-ui-system/core";
import { CVSection } from "./CVSection";

interface CVProfileProps {
  summary: string[];
}

export function CVProfile({ summary }: CVProfileProps) {
  return (
    <CVSection title="Profil">
      {summary.map((paragraph, index) => (
        <Text key={index} variant="body-default-m">
          {paragraph}
        </Text>
      ))}
    </CVSection>
  );
}
