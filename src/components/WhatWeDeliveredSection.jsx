import { Box, Heading, Text, Flex, Card, Grid, Section } from "@radix-ui/themes";
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
    <Section
      style={{
        position: "relative",
        overflow: "hidden",
        paddingBlock: "4rem",
        background: "linear-gradient(to bottom, #1e293b, #0f172a)", // dark theme
      }}
    >
      {/* SVG Decorative Background */}
      <svg
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "600px",
          height: "600px",
          zIndex: 0,
          opacity: 0.06,
          transform: "rotate(45deg)",
        }}
      >
        <circle cx="512" cy="512" r="512" fill="#38bdf8" />
      </svg>

      <svg
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-150px",
          width: "500px",
          height: "500px",
          zIndex: 0,
          opacity: 0.04,
        }}
      >
        <rect width="1024" height="1024" rx="512" fill="#3b82f6" />
      </svg>

      {/* Content */}
      <Box
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          marginInline: "auto",
          paddingInline: "1rem",
        }}
      >
        <Heading align="center" size="7" mb="4" style={{ color: "#f1f5f9" }}>
          What We Delivered
        </Heading>

        <Text
          align="center"
          size="4"
          style={{
            color: "#cbd5e1",
            fontStyle: "italic",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          Tangible results, tailored solutions, and real business impact.
        </Text>

        <Box height="2rem" />

        <Grid columns={{ initial: "1", sm: "2", md: "3" }} style={{ gap: "2rem" }}>
          {deliveries.map((item, idx) => (
            <Box key={idx} style={{ marginBottom: "2rem" }}> {/* Margin between rows */}
              <Card
                variant="ghost"
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  transition: "transform 0.2s ease",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(12px)", // Glassmorphism effect
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                  color: "#f8fafc",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Flex direction="column" gap="3">
                  <CheckCircledIcon width="22" height="22" color="#10b981" />
                  <Heading size="4" style={{ color: "#ffffff" }}>
                    {item.title}
                  </Heading>
                  <Text size="3" style={{ color: "#e5e7eb" }}>
                    {item.description}
                  </Text>
                </Flex>
              </Card>
            </Box>
          ))}
        </Grid>
      </Box>
    </Section>
  );
}
