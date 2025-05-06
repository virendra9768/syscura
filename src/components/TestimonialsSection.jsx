import * as React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Card,
  Avatar,
} from "@radix-ui/themes";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

const testimonials = [
  {
    name: "John Doe",
    company: "TechCorp",
    quote: "Syscura has completely transformed our online presence. The team was responsive, professional, and truly understood our needs. They helped us scale with ease, and we've seen a significant increase in engagement.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Jane Smith",
    company: "FinEdge",
    quote: "Working with Syscura has been a fantastic experience. They delivered on time and provided insights that helped us improve our operations. Their expertise and dedication were invaluable in streamlining our workflow.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Mike Johnson",
    company: "RetailX",
    quote: "Syscura’s tailored IT solutions helped us scale faster than expected. They took the time to understand our challenges and provided solutions that directly addressed them. A great partner for growth.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Sophia Ray",
    company: "EduSmart",
    quote: "Our platform is more stable and scalable thanks to Syscura’s guidance. They provided great support and always kept us informed throughout the entire process. I highly recommend them for any tech needs.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Arjun Patel",
    company: "HealthSync",
    quote: "Syscura’s IT consulting helped us implement systems that truly made a difference. We’ve seen improved efficiency across the board and they helped us solve issues we didn’t even know existed.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Lisa Kim",
    company: "LogiTech",
    quote: "The communication and development skills from Syscura were top-tier. They always had our best interest at heart and delivered solutions that exceeded our expectations. Working with them has been a pleasure.",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 5000 })]
  );

  const [slidesPerView, setSlidesPerView] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setSlidesPerView(1);
      else if (width < 960) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / slidesPerView);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
  
    const onSelect = () => {
      const scrollIndex = emblaApi.selectedScrollSnap();  // Get the current scroll position
      const groupIndex = Math.floor(scrollIndex / slidesPerView);  // Determine the correct dot based on the group
      setSelectedIndex(groupIndex);  // Set the active dot index
    };
  
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, slidesPerView]);
  

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index) =>
    emblaApi?.scrollTo(index * slidesPerView);

  return (
    <Box
      py="8"
      style={{
        background: "linear-gradient(135deg, #6a5acd, #ff7f50, #87cefa)",  // Abstract gradient with soft shades
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Heading align="center" size="6" mb="5">
        What Our Clients Say
      </Heading>

      <Box
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        {/* Arrows */}
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "0.5rem",
            transform: "translateY(-50%)",
            zIndex: 2,
          }}
        >
          <button
            onClick={scrollPrev}
            style={{
              background: "white",
              borderRadius: "9999px",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <ChevronLeftIcon />
          </button>
        </Box>

        <Box
          style={{
            position: "absolute",
            top: "50%",
            right: "0.5rem",
            transform: "translateY(-50%)",
            zIndex: 2,
          }}
        >
          <button
            onClick={scrollNext}
            style={{
              background: "white",
              borderRadius: "9999px",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <ChevronRightIcon />
          </button>
        </Box>

        {/* Carousel */}
        <Box ref={emblaRef} overflow="hidden">
          <Box
            style={{
              display: "flex",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                style={{
                  flex: `0 0 ${100 / slidesPerView}%`,
                  padding: "1rem",
                  boxSizing: "border-box",
                }}
              >
                <Card
                  variant="classic"
                  style={{
                    height: "100%",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.02)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <Flex direction="column" gap="3">
                    <Text size="3" color="gray">
                      {testimonial.quote}
                    </Text>
                    <Flex align="center" direction="column" gap="3" mt="3">
                      <Avatar
                        size="3"
                        src={testimonial.avatar}
                        radius="full"
                      />
                      <Flex align="center" direction="column" gap="1" mt="3">
                        <Text weight="bold" style={{ marginBottom: "0.25rem" }}>
                          {testimonial.name}
                        </Text>
                        <Text size="2" color="gray">
                          {testimonial.company}
                        </Text>
                      </Flex>

                    </Flex>
                  </Flex>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Dot Indicators */}
        <Flex justify="center" gap="2" mt="4">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <Box
              key={idx}
              onClick={() => scrollTo(idx)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor:
                  idx === selectedIndex ? "black" : "#ccc",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}