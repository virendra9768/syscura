import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Card,
  Grid,
  Container,
} from "@radix-ui/themes";
import { TestimonialsSection } from "./TestimonialsSection";
import { ServicesSection } from "./ServicesSection";
import { BannerSection } from "./BannerSection";
import { WhatWeDeliveredSection } from "./WhatWeDeliveredSection";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
    
      <Header />
      <Box style={{ width: "100%", backgroundColor: "#f9fafb" }}>
        {/* Banner */}
        <BannerSection />

        {/* <Container px="5" size="4" style={{ marginTop: "2rem" }}> */}
          {/* Services */}
          <ServicesSection />

          {/* Testimonials Carousel */}
          <TestimonialsSection />

          {/* What We Delivered */}
          <WhatWeDeliveredSection />
        {/* </Container> */}
      </Box>
      <Footer />
    </>
  );
}
