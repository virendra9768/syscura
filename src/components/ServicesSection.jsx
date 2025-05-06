import {
  Box,
  Heading,
  Text,
  Flex,
  Card,
  Grid,
  Section,
} from "@radix-ui/themes";
import {
  Laptop,
  ShieldCheck,
  Code2,
  Server,
  Globe,
  Cloud,
  Wrench,
  Search,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: <Laptop size={28} />,
    title: "IT Consulting",
    description: "Strategic guidance to transform and grow your IT landscape.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Cybersecurity",
    description:
      "Protect your infrastructure with our advanced security solutions.",
  },
  {
    icon: <Code2 size={28} />,
    title: "Web Development",
    description:
      "Custom websites and web apps built for performance and scale.",
  },
  {
    icon: <Server size={28} />,
    title: "Cloud Solutions",
    description: "Migrate and manage your business in the cloud efficiently.",
  },
  {
    icon: <Globe size={28} />,
    title: "Enterprise Software",
    description: "Robust, scalable, and secure enterprise-grade applications.",
  },
  {
    icon: <Cloud size={28} />,
    title: "DevOps Services",
    description: "Streamline your deployment pipelines and operations.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Managed Services",
    description: "Outsource your IT needs to experts for seamless operations.",
  },
  {
    icon: <Search size={28} />,
    title: "QA & Testing",
    description: "Comprehensive testing solutions to ensure product quality.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Data Analytics",
    description:
      "Leverage data for smarter decisions with our analytics tools.",
  },
];

export const ServicesSection = () => {
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
          Our Services
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
          Driving digital success with tailored IT solutions for every industry.
        </Text>

        <Box height="2rem" />
          <Grid columns={{ initial: "1", sm: "2", md: "3" }} style={{ gap: "2rem" }}>
            {services.map((service, idx) => (
              <Box key={idx} style={{ marginBottom: "2rem" }}> {/* Margin between rows */}
                <Card
                  variant="ghost"
                  style={{
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    transition: "transform 0.2s ease",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(12px)",
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
                    <Box style={{ fontSize: "1.75rem", color: "#ffffffcc" }}>
                      {service.icon}
                    </Box>
                    <Heading size="4" style={{ color: "#ffffff" }}>
                      {service.title}
                    </Heading>
                    <Text size="3" style={{ color: "#e5e7eb" }}>
                      {service.description}
                    </Text>
                  </Flex>
                </Card>
              </Box>
            ))}
          </Grid>
      </Box>
    </Section>
  );
};


