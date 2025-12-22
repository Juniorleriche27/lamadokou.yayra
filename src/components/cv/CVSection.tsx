import { Column, Heading } from "@once-ui-system/core";
import { ReactNode } from "react";

interface CVSectionProps {
  title: string;
  children: ReactNode;
  titleVariant?: "heading-strong-l" | "heading-strong-m" | "heading-strong-s";
}

export function CVSection({
  title,
  children,
  titleVariant = "heading-strong-l",
}: CVSectionProps) {
  return (
    <Column gap="m">
      <Heading variant={titleVariant}>{title}</Heading>
      {children}
    </Column>
  );
}
