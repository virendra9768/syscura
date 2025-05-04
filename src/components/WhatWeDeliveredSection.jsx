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

const cardColors = [
  "#1e293b", "#1f2a37", "#22303c", "#2e2a47", "#2b2d42", "#2c2c2c",
];

export function WhatWeDeliveredSection() {
  return (
    <Box py="8" px="6" style={{ backgroundColor: "#0f172a" }}>
      <Heading align="center" size="6" mb="3" style={{ color: "#f1f5f9" }}>
        What We Delivered
      </Heading>

      <Box
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <Text
          size="4"
          style={{
            opacity: 0.85,
            fontStyle: "italic",
            marginBottom: "2.5rem",
            color: "#cbd5e1",
            maxWidth: "700px",
          }}
        >
          Tangible results, tailored solutions, and real business impact.
        </Text>

        <Box height="2rem" />

        <Flex wrap="wrap" gap="5">
          {deliveries.map((item, idx) => (
            <Card
              key={idx}
              style={{
                backgroundColor: cardColors[idx % cardColors.length],
                width: "320px",
                borderRadius: "1rem",
                padding: "1.5rem",
                color: "#f8fafc",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-4px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <Flex align="center" gap="3" mb="3">
                <CheckCircledIcon width="22" height="22" color="#10b981" />
                <Text size="4" weight="bold" style={{ color: "#ffffff" }}>
                  {item.title}
                </Text>
              </Flex>
              <Text size="3" style={{ color: "#e2e8f0" }}>
                {item.description}
              </Text>
            </Card>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
