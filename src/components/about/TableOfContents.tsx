"use client";

import React from "react";
import { Column, Flex, Text } from "@once-ui-system/core";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
  floating?: boolean;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about, floating = true }) => {
  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!about.tableOfContent.display) return null;

  const wrapperProps = floating
    ? {
        left: "0" as const,
        position: "fixed" as const,
        paddingLeft: "24" as const,
        gap: "32" as const,
        m: { hide: true },
        style: {
          top: "50%",
          transform: "translateY(-50%)",
          whiteSpace: "nowrap",
        },
      }
    : {
        gap: "16" as const,
        padding: "16" as const,
        border: "neutral-alpha-weak" as const,
        radius: "l" as const,
        background: "surface" as const,
        className: `${styles.tocCard} ${styles.panel}`,
      };

  return (
    <Column {...wrapperProps}>
      {structure
        .filter((section) => section.display)
        .map((section, sectionIndex) => (
          <Column key={sectionIndex} gap="12">
            <Flex
              cursor="interactive"
              className={styles.hover}
              gap="8"
              vertical="center"
              onClick={() => scrollTo(section.title, floating ? 80 : 48)}
            >
              <Flex height="1" minWidth="16" background="neutral-strong"></Flex>
              <Text>{section.title}</Text>
            </Flex>
            {about.tableOfContent.subItems && (
              <>
                {section.items.map((item, itemIndex) => (
                  <Flex
                    l={{ hide: true }}
                    key={itemIndex}
                    style={{ cursor: "pointer" }}
                    className={styles.hover}
                    gap="12"
                    paddingLeft="24"
                    vertical="center"
                    onClick={() => scrollTo(item, 80)}
                  >
                    <Flex height="1" minWidth="8" background="neutral-strong"></Flex>
                    <Text>{item}</Text>
                  </Flex>
                ))}
              </>
            )}
          </Column>
        ))}
    </Column>
  );
};

export default TableOfContents;
