import { Box, Flex, Text, Link, Button } from "@radix-ui/themes";
import { LightningBoltIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";  // Importing EnvelopeClosedIcon from Radix UI
import { FaWhatsapp } from "react-icons/fa";  // Importing WhatsApp Icon from react-icons

export default function Header() {
  return (
    <>
      <Box
        as="header"
        px="6"
        py="4"
        // style={{
        //   background: "rgba(255, 255, 255, 0.75)",
        //   borderBottom: "1px solid var(--gray-4)",
        //   backdropFilter: "blur(12px)",
        //   boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
        //   position: "sticky",
        //   top: 0,
        //   zIndex: 50,
        // }}
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
          <Flex gap="8" align="center" className="nav-text" style={{ fontSize: "16px" }}>
            <Link href="#" color="gray" underline="hover" style={{ padding: "0.5rem 0" }}>
              Services
            </Link>
            <Link href="#" color="gray" underline="hover" style={{ padding: "0.5rem 0" }}>
              Portfolio
            </Link>
            <Link href="#" color="gray" underline="hover" style={{ padding: "0.5rem 0" }}>
              About
            </Link>
            <Link href="#" color="gray" underline="hover" style={{ padding: "0.5rem 0" }}>
              Contact
            </Link>
          </Flex>

          {/* Social Links (WhatsApp and Email) */}
          <Flex gap="6" align="center" className="social-links">
            <Link href="https://wa.me/your-phone-number" target="_blank" color="gray" underline="hover">
              <FaWhatsapp size="20" style={{ cursor: "pointer" }} />  {/* WhatsApp Icon */}
            </Link>
            <Link href="mailto:your-email@example.com" color="gray" underline="hover">
              <EnvelopeClosedIcon width="20" height="20" />  {/* Envelope Closed Icon from Radix UI */}
            </Link>
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
              fontWeight: 600, // Increased font weight for emphasis
              boxShadow: "0 6px 16px rgba(99, 102, 241, 0.3)",
              transition: "all 0.3s ease",
              borderRadius: "999px",
              fontFamily: "Inter, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(99, 102, 241, 0.45)";
              e.currentTarget.style.transform = "scale(1.05)";  // Add a slight scale effect
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(99, 102, 241, 0.3)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Get Started
          </Button>
        </Flex>
      </Box>
    </>
  );
}