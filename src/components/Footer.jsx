import { Box, Flex, Text, Link, Separator, Grid } from "@radix-ui/themes";
import { LightningBoltIcon } from "@radix-ui/react-icons";

// Include fonts and styles just like header
// const globalStyles = `
//   @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@700&family=Inter:wght@400;500&display=swap');

//   .logo-text {
//     font-family: 'Unbounded', sans-serif;
//   }

//   .footer-text {
//     font-family: 'Inter', sans-serif;
//   }

//   .footer-link:hover {
//     text-decoration: underline;
//     color: var(--indigo-9);
//   }
// `;

export default function Footer() {
  return (
    <>
      {/* <style>{globalStyles}</style> */}
      <Box
        as="footer"
        px="6"
        pt="8"
        pb="5"
        style={{
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid var(--gray-4)",
        }}
      >
        {/* Top Section */}
        <Box
          height="2px"
          style={{
            background: "linear-gradient(to right, #6366f1, #818cf8)",
            borderRadius: "999px",
            marginBottom: "16px",
          }}
        />
        <Flex justify="between" wrap="wrap" direction={{ initial: "column", md: "row" }} gap="6">
          {/* Logo + Tagline */}
          <Flex direction="column" gap="2">
            <Flex align="center" gap="2">
              <LightningBoltIcon width="22" height="22" />
              <Text size="5" weight="bold" className="logo-text">
                Syscura
              </Text>
            </Flex>
            <Text size="2" color="gray" className="footer-text">
              Crafting secure, scalable digital solutions.
            </Text>
          </Flex>

          {/* Navigation Links */}
          <Grid columns={{ initial: "2", sm: "3" }} gap="4" className="footer-text">
            <Box>
              <Text weight="medium" size="3" mb="2">Product</Text>
              <Flex direction="column" gap="1">
                <Link className="footer-link" href="#">Features</Link>
                <Link className="footer-link" href="#">Pricing</Link>
                <Link className="footer-link" href="#">Security</Link>
              </Flex>
            </Box>
            <Box>
              <Text weight="medium" size="3" mb="2">Company</Text>
              <Flex direction="column" gap="1">
                <Link className="footer-link" href="#">About Us</Link>
                <Link className="footer-link" href="#">Careers</Link>
                <Link className="footer-link" href="#">Contact</Link>
              </Flex>
            </Box>
            <Box>
              <Text weight="medium" size="3" mb="2">Resources</Text>
              <Flex direction="column" gap="1">
                <Link className="footer-link" href="#">Docs</Link>
                <Link className="footer-link" href="#">Blog</Link>
                <Link className="footer-link" href="#">Support</Link>
              </Flex>
            </Box>
          </Grid>
        </Flex>

        {/* Divider */}
        <Separator my="4" size="4" />

        {/* Bottom Row */}
        <Flex justify="between" wrap="wrap" align="center" className="footer-text" gap="3">
          <Text size="2" color="gray">&copy; {new Date().getFullYear()} Syscura. All rights reserved.</Text>
          <Flex gap="4">
            <Link className="footer-link" href="#">Privacy</Link>
            <Link className="footer-link" href="#">Terms</Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
