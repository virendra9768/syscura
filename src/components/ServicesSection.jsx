import { Box, Heading, Text, Flex, Card, Grid } from "@radix-ui/themes";
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
    icon: <Laptop size={32} />,
    title: "IT Consulting",
    description: "Strategic guidance to transform and grow your IT landscape.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Cybersecurity",
    description:
      "Protect your infrastructure with our advanced security solutions.",
  },
  {
    icon: <Code2 size={32} />,
    title: "Web Development",
    description:
      "Custom websites and web apps built for performance and scale.",
  },
  {
    icon: <Server size={32} />,
    title: "Cloud Solutions",
    description: "Migrate and manage your business in the cloud efficiently.",
  },
  {
    icon: <Globe size={32} />,
    title: "Enterprise Software",
    description: "Robust, scalable, and secure enterprise-grade applications.",
  },
  {
    icon: <Cloud size={32} />,
    title: "DevOps Services",
    description: "Streamline your deployment pipelines and operations.",
  },
  {
    icon: <Wrench size={32} />,
    title: "Managed Services",
    description: "Outsource your IT needs to experts for seamless operations.",
  },
  {
    icon: <Search size={32} />,
    title: "QA & Testing",
    description: "Comprehensive testing solutions to ensure product quality.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Data Analytics",
    description:
      "Leverage data for smarter decisions with our analytics tools.",
  },
];

export const ServicesSection = () => {
  return (
    <Box py="8" px="4" style={{ backgroundColor: "var(--gray-a2)" }}>
      <Heading align="center" size="7" mb="4">
        Our Services
      </Heading>
      <Text
        align="center"
        size="4"
        style={{
          opacity: 0.85,
          fontStyle: "italic",
          marginBottom: "3rem", // More space between tagline and services
          maxWidth: "700px",
          marginInline: "auto",
        }}
      >
        Driving digital success with tailored IT solutions for every industry.
      </Text>
      <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="4">
        {services.map((service, idx) => (
          <Card key={idx} variant="surface" style={{ padding: "1.5rem" }}>
            <Flex direction="column" align="start" gap="3">
              <Box style={{ color: "var(--accent-10)" }}>{service.icon}</Box>
              <Heading size="4">{service.title}</Heading>
              <Text size="3" style={{ opacity: 0.9 }}>
                {service.description}
              </Text>
            </Flex>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};
