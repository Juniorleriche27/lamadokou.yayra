import { Column, Text } from "@once-ui-system/core";
import { CVSection } from "./CVSection";
import type { CV } from "@/types";

interface CVCertificationsProps {
  certifications: CV["certifications"];
}

export function CVCertifications({ certifications }: CVCertificationsProps) {
  if (certifications.length === 0) return null;

  return (
    <CVSection title="Certifications" titleVariant="heading-strong-s">
      <Column gap="8">
        {certifications.map((cert, index) => (
          <Text key={index} variant="body-default-s">
            {cert.link ? (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                {cert.name}
                {cert.issuer && ` - ${cert.issuer}`}
              </a>
            ) : (
              <>
                {cert.name}
                {cert.issuer && ` - ${cert.issuer}`}
              </>
            )}
            {cert.date && (
              <Text as="span" variant="body-default-xs" onBackground="neutral-weak">
                {" "}
                ({cert.date})
              </Text>
            )}
          </Text>
        ))}
      </Column>
    </CVSection>
  );
}
