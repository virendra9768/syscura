import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Container,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1350&q=80",
    headline: "Empowering Businesses with Scalable Tech",
    subtext: "Syscura delivers tailored IT services to enterprises across the globe.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1350&q=80",
    headline: "Secure. Scalable. Future-ready.",
    subtext: "From infrastructure to innovation, we’ve got you covered.",
  },
];

export const BannerSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Automatic slide change every 5 seconds
    return () => clearInterval(timer); // Cleanup the timer
  }, []);

  const slide = slides[current];

  return (
    <Box
      style={{
        position: "relative",
        backgroundImage: `url('${slide.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        display: "flex",
        alignItems: "center",
        color: "white",
        transition: "background-image 0.6s ease-in-out",
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
        <Flex
          direction="column"
          gap="4"
          style={{
            maxWidth: "600px",
            opacity: 1,
            transition: "all 0.5s ease",
          }}
        >
          <Heading size="9" weight="bold" style={{ lineHeight: 1.2 }}>
            {slide.headline}
          </Heading>
          <Text size="5" style={{ opacity: 0.9 }}>
            {slide.subtext}
          </Text>
          <Link to="/contact">
            <Button size="4" radius="full" highContrast>
              Connect with Us
            </Button>
          </Link>
        </Flex>
      </Container>

      {/* Slide Indicators (Centered at Bottom) */}
      <Flex
        justify="center"
        align="center"
        gap="2"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor:
                index === current ? "white" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Flex>

      {/* Preload Images */}
      {slides.map((slide, index) => (
        <link
          key={index}
          rel="preload"
          href={slide.image}
          as="image"
          type="image/jpeg"
        />
      ))}
    </Box>
  );
};
