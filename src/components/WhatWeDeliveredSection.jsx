// components/WhatWeDeliveredSection.tsx

import { Box, Card, Heading, Text, Flex } from "@radix-ui/themes";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const deliveries = [
  {
    title: "Scalable Web Platform",
    description: "Built a robust web platform that scaled to 100k+ users with zero downtime.",
  },
  {
    title: "Cloud Infrastructure",
    description: "Deployed a secure and cost-optimized AWS infrastructure for a healthcare client.",
  },
  {
    title: "Mobile App Integration",
    description: "Integrated mobile app features with real-time syncing and offline mode.",
  },
  {
    title: "Enterprise Automation",
    description: "Implemented automated workflows reducing manual effort by 60%.",
  },
  {
    title: "Data Analytics Dashboard",
    description: "Built a custom dashboard that visualized KPIs and boosted decision-making speed.",
  },
  {
    title: "Custom CRM Solution",
    description: "Developed a CRM tailored to a client’s workflow improving lead conversions.",
  },
];

export function WhatWeDeliveredSection() {
  return (
    <Box py="8" px="6" style={{ backgroundColor: "var(--gray-a2)" }}>
      <Heading align="center" size="6" mb="2">
        What We Delivered
      </Heading>

      {/* Updated Subtext with the same styling as Services Section */}
      <Text
        align="center"
        size="4"
        style={{
          opacity: 0.85,
          fontStyle: "italic",
          marginBottom: "3rem", // More space between tagline and services
          maxWidth: "700px",
          marginInline: "auto",
          padding: "0 1rem", // Added padding to prevent overflow
        }}
      >
        Tangible results, tailored solutions, and real business impact.
      </Text>

      <Flex wrap="wrap" justify="center" gap="5">
        {deliveries.map((item, idx) => (
          <Card
            key={idx}
            variant="classic"
            style={{
              width: "320px",
              padding: "1.5rem",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              transition: "transform 0.2s",
              marginBottom: "2rem", // Adding some bottom space between cards
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <Flex align="center" gap="3" mb="3">
              <CheckCircledIcon width="20" height="20" color="green" />
              <Text size="4" weight="bold">
                {item.title}
              </Text>
            </Flex>
            <Text size="3" color="gray">
              {item.description}
            </Text>
          </Card>
        ))}
      </Flex>
    </Box>
  );
}
