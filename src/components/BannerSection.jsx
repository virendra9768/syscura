import {
  Box,
  Heading,
  Text,
  Flex,
  Card,
  Grid,
  Button,
  Container,
} from "@radix-ui/themes";

export const BannerSection = () => {
  return (
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
      {/* Banner Section  */}
      <Container size="4" style={{ position: "relative", zIndex: 2 }}>
        <Flex direction="column" gap="4" style={{ maxWidth: "600px" }}>
          <Heading size="9" weight="bold" style={{ lineHeight: 1.2 }}>
            Empowering Businesses with <br /> Scalable Tech
          </Heading>
          <Text size="5" style={{ opacity: 0.9 }}>
            Syscura delivers tailored IT services to enterprises across the
            globe.
          </Text>
          <Button size="4" radius="full" highContrast>
            Get Started
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
