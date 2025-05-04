// import { useState } from "react";
// import axios from "axios";
// import { Section, Box, Heading, Text, Flex, TextField, Button, TextArea } from "@radix-ui/themes";
// import { Mail, User } from "lucide-react";
// import Header from "./Header";
// import Footer from "./Footer";

// export const ContactUs = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const inputBaseStyle = {
//     backgroundColor: "rgba(255,255,255,0.03)",
//     border: "1px solid rgba(255,255,255,0.1)",
//     borderRadius: "8px",
//     color: "#fff",
//     paddingLeft: "2.5rem",
//     height: "44px",
//     position: "relative",
//     fontSize: "15px",
//     "::placeholder": {
//       color: "#94a3b8",
//     },
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post("http://localhost:3000/api/contact", {
//         name,
//         email,
//         message,
//       });
//       console.log("Message sent:", response.data);
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <Section
//         style={{
//           position: "relative",
//           overflow: "hidden",
//           paddingBlock: "6rem",
//           background: "linear-gradient(to bottom, #1e293b, #0f172a)",
//         }}
//       >
//         {/* Decorative SVGs */}
//         <svg
//           viewBox="0 0 1024 1024"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{
//             position: "absolute",
//             top: "-100px",
//             left: "-100px",
//             width: "600px",
//             height: "600px",
//             zIndex: 0,
//             opacity: 0.06,
//             transform: "rotate(45deg)",
//           }}
//         >
//           <circle cx="512" cy="512" r="512" fill="#38bdf8" />
//         </svg>

//         <svg
//           viewBox="0 0 1024 1024"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{
//             position: "absolute",
//             bottom: "-150px",
//             right: "-150px",
//             width: "500px",
//             height: "500px",
//             zIndex: 0,
//             opacity: 0.04,
//           }}
//         >
//           <rect width="1024" height="1024" rx="512" fill="#3b82f6" />
//         </svg>

//         {/* Form Container */}
//         <Box
//           style={{
//             position: "relative",
//             zIndex: 1,
//             maxWidth: "600px",
//             marginInline: "auto",
//             padding: "2.5rem",
//             borderRadius: "1rem",
//             backgroundColor: "rgba(255, 255, 255, 0.05)",
//             backdropFilter: "blur(12px)",
//             border: "1px solid rgba(255, 255, 255, 0.1)",
//             boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
//             color: "#f8fafc",
//           }}
//         >
//           <Heading align="center" size="7" mb="4" style={{ color: "#f1f5f9" }}>
//             Get in Touch
//           </Heading>

//           <Text align="center" size="4" mb="6" style={{ color: "#cbd5e1" }}>
//             We'd love to hear from you. Please fill out the form.
//           </Text>

//           <Flex direction="column" gap="5">
//             <Box style={{ position: "relative" }}>
//               <User size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8", zIndex: 2 }} />
//               <TextField.Root
//                 placeholder="Your Name"
//                 style={inputBaseStyle}
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Box>

//             <Box style={{ position: "relative" }}>
//               <Mail size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8", zIndex: 2 }} />
//               <TextField.Root
//                 type="email"
//                 placeholder="Your Email"
//                 style={inputBaseStyle}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Box>

//             <TextArea
//               placeholder="Your Message"
//               rows={5}
//               style={{
//                 padding: "1rem",
//                 backgroundColor: "rgba(255,255,255,0.03)",
//                 border: "1px solid rgba(255,255,255,0.1)",
//                 borderRadius: "8px",
//                 color: "#fff",
//                 fontSize: "15px",
//               }}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />

//             <Button
//               size="3"
//               style={{
//                 backgroundColor: "#38bdf8",
//                 color: "#0f172a",
//                 fontWeight: 600,
//                 borderRadius: "8px",
//                 transition: "all 0.3s",
//               }}
//               onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0ea5e9")}
//               onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#38bdf8")}
//               onClick={handleSubmit}
//             >
//               Send Message
//             </Button>
//           </Flex>
//         </Box>
//       </Section>
//       <Footer />
//     </>
//   );
// };

import { useState } from "react";
import axios from "axios";
import {
  Section,
  Box,
  Heading,
  Text,
  Flex,
  TextField,
  Button,
  TextArea,
} from "@radix-ui/themes";
import { Mail, User } from "lucide-react";
import * as Toast from "@radix-ui/react-toast";
import Header from "./Header";
import Footer from "./Footer";

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputBaseStyle = {
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    color: "#fff",
    paddingLeft: "2.5rem",
    height: "44px",
    position: "relative",
    fontSize: "15px",
    "::placeholder": {
      color: "#94a3b8",
    },
  };

  const validateForm = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setToastType("error");
      setToastMessage("All fields are required.");
      setShowToast(true);
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setToastType("error");
      setToastMessage("Please enter a valid email address.");
      setShowToast(true);
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      await axios.post("http://localhost:3000/api/contact", {
        name,
        email,
        message,
      });

      setToastType("success");
      setToastMessage("Message sent successfully!");
      setShowToast(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      setToastType("error");
      setToastMessage("Failed to send message. Please try again later.");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Toast.Provider swipeDirection="right" duration={4000}>
        <Section
          style={{
            position: "relative",
            overflow: "hidden",
            paddingBlock: "6rem",
            background: "linear-gradient(to bottom, #1e293b, #0f172a)",
          }}
        >
          {/* Decorative SVGs */}
          {/* ... SVGs remain unchanged ... */}

          <Box
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "600px",
              marginInline: "auto",
              padding: "2.5rem",
              borderRadius: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
              color: "#f8fafc",
            }}
          >
            <Heading align="center" size="7" mb="4" style={{ color: "#f1f5f9" }}>
              Get in Touch
            </Heading>

            <Text align="center" size="4" mb="6" style={{ color: "#cbd5e1" }}>
              We'd love to hear from you. Please fill out the form.
            </Text>

            <Flex direction="column" gap="5">
              <Box style={{ position: "relative" }}>
                <User size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8", zIndex: 2 }} />
                <TextField.Root
                  placeholder="Your Name"
                  style={inputBaseStyle}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>

              <Box style={{ position: "relative" }}>
                <Mail size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8", zIndex: 2 }} />
                <TextField.Root
                  type="email"
                  placeholder="Your Email"
                  style={inputBaseStyle}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>

              <TextArea
                placeholder="Your Message"
                rows={5}
                style={{
                  padding: "1rem",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "15px",
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <Button
                size="3"
                disabled={loading}
                style={{
                  backgroundColor: "#38bdf8",
                  color: "#0f172a",
                  fontWeight: 600,
                  borderRadius: "8px",
                  transition: "all 0.3s",
                  opacity: loading ? 0.6 : 1,
                }}
                onMouseOver={(e) => !loading && (e.currentTarget.style.backgroundColor = "#0ea5e9")}
                onMouseOut={(e) => !loading && (e.currentTarget.style.backgroundColor = "#38bdf8")}
                onClick={handleSubmit}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Flex>
          </Box>
        </Section>

        <Toast.Root
          open={showToast}
          onOpenChange={setShowToast}
          className={`fixed bottom-5 right-5 bg-white px-4 py-3 rounded-lg shadow-lg border-l-4 ${
            toastType === "success" ? "border-green-500 text-green-800" : "border-red-500 text-red-800"
          }`}
        >
          <Toast.Title>{toastMessage}</Toast.Title>
        </Toast.Root>
        <Toast.Viewport />
      </Toast.Provider>
      <Footer />
    </>
  );
};
