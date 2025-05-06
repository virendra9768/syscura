// import { Box, Text, Grid, Card, Heading } from '@radix-ui/themes';
// import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons

// const offices = [
//   { name: "New York", address: "123 5th Ave, New York, NY", contact: "info@sysecure.com", image: "path/to/image1.jpg" },
//   { name: "London", address: "456 Oxford St, London", contact: "info@sysecure.co.uk", image: "path/to/image2.jpg" },
//   // Add more offices as needed
// ];

// export const OurOfficesSection = () => {
//   return (
//     <Box
//       as="section"
//       style={{
//         padding: '60px 20px',
//         background: 'linear-gradient(135deg, #4A90E2, #6A82FB)', // Gradient background for the section
//         color: '#FFF',
//       }}
//     >
//       {/* <Text
//         as="h2"
//         style={{
//           marginBottom: '40px',
//           textAlign: 'center',
//           fontSize: '36px',
//           fontWeight: '700',
//           color: '#FFF',
//         }}
//       >
//         Our Global Offices
//       </Text> */}
//       <Heading align="center" size="7" mb="4" style={{ color: "#f1f5f9" }}>
//                 Our Offices
//               </Heading>
//       <Grid
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
//           gap: '30px',
//         }}
//       >
//         {offices.map((office) => (
//           <Card
//             key={office.name}
//             style={{
//               position: 'relative',
//               padding: '20px',
//               borderRadius: '12px',
//               boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               backgroundImage: `url(${office.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               color: '#FFF',
//               height: '350px', // Sufficient height for content
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'flex-end', // Ensures content is at the bottom
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = 'scale(1.05)';
//               e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = 'scale(1)';
//               e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
//             }}
//           >
//             <Box
//               style={{
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background to make text stand out
//                 padding: '15px',
//                 borderRadius: '8px',
//                 marginBottom: '10px', // Bottom margin to separate the text
//                 textAlign: 'left', // Align text to the left
//                 width: '100%',
//               }}
//             >
//               <Text
//                 as="h3"
//                 style={{
//                   fontSize: '24px',
//                   fontWeight: '600',
//                   margin: '0',
//                   whiteSpace: 'normal',
//                   overflowWrap: 'break-word',
//                 }}
//               >
//                 {office.name}
//               </Text>
//             </Box>

//             <Box
//               style={{
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background for other text sections
//                 padding: '10px',
//                 borderRadius: '8px',
//                 textAlign: 'left',
//                 width: '100%',
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: '14px',
//                   marginBottom: '10px',
//                   whiteSpace: 'normal',
//                   overflowWrap: 'break-word',
//                 }}
//               >
//                 {office.address}
//               </Text>

//               <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
//                 <FaPhone style={{ marginRight: '6px', fontSize: '18px' }} />
//                 <Text style={{ fontSize: '14px' }}>{office.contact}</Text>
//               </div>

//               <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
//                 <FaEnvelope style={{ marginRight: '6px', fontSize: '18px' }} />
//                 <Text style={{ fontSize: '14px' }}>{office.contact}</Text>
//               </div>
//             </Box>
//           </Card>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

import { Box, Text, Grid, Card } from '@radix-ui/themes';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const offices = [
  { name: "New York", address: "123 5th Ave, New York, NY", contact: "info@sysecure.com", image: "public/flags/canada.jpg" },
  { name: "London", address: "456 Oxford St, London", contact: "info@sysecure.co.uk", image: "pulbic/flags/australiajpg" },
  // Add more offices as needed
];

export const OurOfficesSection = () => {
  return (
    <Box
      as="section"
      style={{
        padding: '60px 20px',
        background: 'linear-gradient(135deg, #4A90E2, #6A82FB)', // Gradient background for the section
        color: '#FFF',
      }}
    >
      <Text
        as="h2"
        style={{
          marginBottom: '40px',
          textAlign: 'center',
          fontSize: '36px',
          fontWeight: '700',
          color: '#FFF',
        }}
      >
        Our Global Offices
      </Text>
      <Grid
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px',
        }}
      >
        {offices.map((office) => (
          <Card
            key={office.name}
            style={{
              position: 'relative',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              backgroundImage: `url(${office.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#FFF',
              height: '350px', // Sufficient height for content
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end', // Ensures content is at the bottom
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            <Box
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay to make text stand out
                borderRadius: '12px',
              }}
            />
            <Box
              style={{
                zIndex: 1,
                padding: '15px',
                textAlign: 'left',
                width: '100%',
              }}
            >
              <Text
                as="h3"
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  margin: '0',
                  whiteSpace: 'normal',
                  overflowWrap: 'break-word',
                }}
              >
                {office.name}
              </Text>
            </Box>

            <Box
              style={{
                zIndex: 1,
                padding: '10px',
                borderRadius: '8px',
                textAlign: 'left',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background for text sections
              }}
            >
              <Text
                style={{
                  fontSize: '14px',
                  marginBottom: '10px',
                  whiteSpace: 'normal',
                  overflowWrap: 'break-word',
                }}
              >
                {office.address}
              </Text>

              <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                <FaPhone style={{ marginRight: '6px', fontSize: '18px' }} />
                <Text style={{ fontSize: '14px' }}>{office.contact}</Text>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                <FaEnvelope style={{ marginRight: '6px', fontSize: '18px' }} />
                <Text style={{ fontSize: '14px' }}>{office.contact}</Text>
              </div>
            </Box>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};
