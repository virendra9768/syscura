import { Box, Flex, Text, Link, Button } from "@radix-ui/themes";
import { LightningBoltIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <>
      <Box
        as="header"
        px="6"
        py="4"
        style={{
          background: "rgba(255, 255, 255, 0.75)",
          borderBottom: "1px solid var(--gray-4)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <Flex justify="between" align="center" wrap="wrap">
          {/* Logo */}
          <Flex align="center" gap="2">
            <LightningBoltIcon width="24" height="24" />
            <Text
              size="6"
              weight="bold"
              className="logo-text"
              style={{ letterSpacing: "-0.03em" }}
            >
              Syscura
            </Text>
          </Flex>

          {/* Navigation */}
          <Flex gap="5" align="center" className="nav-text" style={{ fontSize: "17px" }}>
            <Link href="#" color="gray" underline="hover">Home</Link>
            <Link href="#" color="gray" underline="hover">Services</Link>
            <Link href="#" color="gray" underline="hover">Portfolio</Link>
            <Link href="#" color="gray" underline="hover">About</Link>
            <Link href="#" color="gray" underline="hover">Contact</Link>
          </Flex>

          {/* CTA Button */}
          <Button
            size="4"
            variant="solid"
            color="indigo"
            highContrast
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: 500,
              boxShadow: "0 6px 16px rgba(99, 102, 241, 0.3)",
              transition: "all 0.3s ease",
              borderRadius: "999px",
              fontFamily: "Inter, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(99, 102, 241, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(99, 102, 241, 0.3)";
            }}
          >
            Get Started
          </Button>
        </Flex>
      </Box>
    </>
  );
}
