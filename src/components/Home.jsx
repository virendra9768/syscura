import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Card,
  Grid,
  Avatar,
  Container,
} from "@radix-ui/themes";
import { Laptop, ShieldCheck, Code2, Server, Globe, Cloud, Wrench, Search, BarChart3 } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react'

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  const services = [
    {
      icon: <Laptop size={32} />,
      title: "IT Consulting",
      description: "Strategic guidance to transform and grow your IT landscape.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Cybersecurity",
      description: "Protect your infrastructure with our advanced security solutions.",
    },
    {
      icon: <Code2 size={32} />,
      title: "Web Development",
      description: "Custom websites and web apps built for performance and scale.",
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
      description: "Leverage data for smarter decisions with our analytics tools.",
    },
  ];

  const testimonials = [
    {
      quote: "Syscura transformed our digital strategy. Their team is reliable and incredibly skilled.",
      author: "Jane Doe",
      title: "CEO, FinTechCo",
    },
    {
      quote: "The professionalism and technical prowess they bring to the table are unmatched.",
      author: "Michael Lee",
      title: "CTO, HealthSync",
    },
    {
      quote: "From ideation to deployment, the Syscura team made everything seamless.",
      author: "Anita Kumar",
      title: "Founder, EduSmart",
    },
  ];

  return (
    <Box style={{ width: "100%", backgroundColor: "#f9fafb" }}>
      <Box
        style={{
          position: "relative",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        {/* Overlay */}
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        />

        {/* Banner Content */}
        <Container size="4" style={{ position: "relative", zIndex: 2 }}>
          <Flex direction="column" gap="4" style={{ maxWidth: "600px" }}>
            <Heading size="9" weight="bold" style={{ lineHeight: 1.2 }}>
              Empowering Businesses with <br /> Scalable Tech
            </Heading>
            <Text size="5" style={{ opacity: 0.9 }}>
              Syscura delivers tailored IT services to enterprises across the globe.
            </Text>
            <Button size="4" radius="full" highContrast>
              Get Started
            </Button>
          </Flex>
        </Container>
      </Box>

      <Container px="5" size="4" style={{ marginTop: "2rem" }}>
        {/* Services */}
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

        {/* Testimonials Carousel */}
        {/* <Box mt="8">
          <Heading size="6" mb="4">Testimonials</Heading>
          <Flex overflowX="auto" gap="4" pb="2">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                variant="surface"
                style={{
                  minWidth: "300px",
                  padding: "1.5rem",
                  flexShrink: 0,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Text size="3" style={{ fontStyle: "italic" }}>"{testimonial.quote}"</Text>
                <Flex align="center" gap="3" mt="3">
                  <Avatar fallback={testimonial.name.charAt(0)} />
                  <Box>
                    <Text weight="bold">{testimonial.name}</Text>
                    <Text size="2">{testimonial.role}</Text>
                  </Box>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Box> */}
        <Box py="9" style={{ backgroundColor: "var(--gray-a2)" }}>
          <Text size="6" align="center" weight="bold" mb="4">What Our Clients Say</Text>
          <Box ref={emblaRef} style={{ overflow: 'hidden' }}>
            <Box style={{ display: 'flex' }}>
              {testimonials.map((t, i) => (
                <Box
                  key={i}
                  style={{
                    minWidth: '100%',
                    padding: '2rem',
                    boxSizing: 'border-box',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    margin: '0 1rem',
                  }}
                >
                  <Text size="4" style={{ fontStyle: "italic" }}>{`"${t.quote}"`}</Text>
                  <Text size="3" mt="3" weight="bold">{t.author}</Text>
                  <Text size="2" color="gray">{t.title}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* What We Delivered */}
        <Box mt="8" mb="8">
          <Heading size="6" mb="4">What We Delivered</Heading>
          <Grid columns={{ initial: "1", sm: "3" }} gap="4">
            <Card variant="classic" style={{ padding: "2rem", textAlign: "center" }}>
              <Heading size="5">100+ Projects</Heading>
              <Text size="3">Delivered across 10+ countries</Text>
            </Card>
            <Card variant="classic" style={{ padding: "2rem", textAlign: "center" }}>
              <Heading size="5">50+ Clients</Heading>
              <Text size="3">From startups to enterprises</Text>
            </Card>
            <Card variant="classic" style={{ padding: "2rem", textAlign: "center" }}>
              <Heading size="5">99.9% Uptime</Heading>
              <Text size="3">Guaranteed across all deployments</Text>
            </Card>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
