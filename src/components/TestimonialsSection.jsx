import * as React from "react";
import { Box, Flex, Text, Heading, Card, Avatar, Separator } from "@radix-ui/themes";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const testimonials = [
  {
    name: "John Doe",
    company: "TechCorp",
    quote: "Syscura transformed our digital presence beyond expectations.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Jane Smith",
    company: "FinEdge",
    quote: "Professional, responsive, and reliable. A true IT partner.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Mike Johnson",
    company: "RetailX",
    quote: "Syscura helped us scale efficiently with tailored IT solutions.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Sophia Ray",
    company: "EduSmart",
    quote: "Our education platform is now more stable and scalable.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Arjun Patel",
    company: "HealthSync",
    quote: "Reliable IT consulting that delivered real results.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Lisa Kim",
    company: "LogiTech",
    quote: "Excellent communication and top-tier development skills.",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const slidesPerView = 3;
  const totalPages = Math.ceil(testimonials.length / slidesPerView);

  return (
    <Box py="8" style={{ background: "var(--gray-a2)", position: "relative" }}>
      <Heading align="center" size="6" mb="4">
        What Our Clients Say
      </Heading>

      {/* Carousel container */}
      <Box position="relative" px="6">
        {/* Left Arrow */}
        <Box
          onClick={scrollPrev}
          style={{
            position: "absolute",
            left: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            cursor: "pointer",
            background: "#fff",
            borderRadius: "9999px",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <ChevronLeftIcon width="20" height="20" />
        </Box>

        {/* Right Arrow */}
        <Box
          onClick={scrollNext}
          style={{
            position: "absolute",
            right: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            cursor: "pointer",
            background: "#fff",
            borderRadius: "9999px",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <ChevronRightIcon width="20" height="20" />
        </Box>

        {/* Slides */}
        <Box ref={emblaRef} overflow="hidden" pb="4">
          <Flex gap="4" style={{ minWidth: 0 }}>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                variant="classic"
                style={{
                  minWidth: "33.33%",
                  flex: "0 0 33.33%",
                  padding: "1.5rem",
                }}
              >
                <Flex direction="column" gap="3">
                  <Text size="3" color="gray">
                    "{testimonial.quote}"
                  </Text>
                  <Flex align="center" gap="3" mt="3">
                    <Avatar size="3" src={testimonial.avatar} radius="full" />
                    <Box>
                      <Text weight="bold">{testimonial.name}</Text>
                      <Text size="2" color="gray">
                        {testimonial.company}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Box>

        {/* Dot Indicators */}
        <Flex justify="center" gap="2" mt="3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <Box
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx * slidesPerView)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: idx === selectedIndex ? "black" : "#ccc",
                cursor: "pointer",
              }}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
