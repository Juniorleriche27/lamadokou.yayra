import { Column, Row, Text } from "@once-ui-system/core";
import { CVSection } from "./CVSection";
import type { CV } from "@/types";

interface CVActivitiesProps {
  activities?: CV["activities"];
}

export function CVActivities({ activities }: CVActivitiesProps) {
  if (!activities || activities.length === 0) return null;

  return (
    <CVSection title="Activités" titleVariant="heading-strong-l">
      <Column gap="m">
        {activities.map((activity, index) => (
          <Column key={index} gap="4">
            <Row horizontal="between" vertical="center" wrap>
              <Text variant="body-default-s" weight="strong">
                {activity.name}
              </Text>
              {activity.timeframe && (
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {activity.timeframe}
                </Text>
              )}
            </Row>
            {activity.description && (
              <Text variant="body-default-s">{activity.description}</Text>
            )}
          </Column>
        ))}
      </Column>
    </CVSection>
  );
}
