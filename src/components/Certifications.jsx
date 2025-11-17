import React from "react";
import Stack from "./Stack";

const Certifications = () => {
  const images = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dxauzebpd/image/upload/v1763291056/Certificates/ReactNative_w5ylc0.jpg",
    },
    {
      id: 2,
      img: "https://udemy-certificate.s3.amazonaws.com/image/UC-78e7d9be-223f-4c5a-ae43-b562eedaf54b.jpg",
    },
    {
      id: 3,
      img: "https://udemy-certificate.s3.amazonaws.com/image/UC-0a6c5e3e-2aa6-4999-902a-5e94a388487d.jpg",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dxauzebpd/image/upload/v1763291056/Certificates/SoftSKills_gfht46.jpg",
    },
  ];
  return (
    <Stack
      randomRotation={true}
      sensitivity={180}
      sendToBackOnClick={false}
      cardDimensions={{ width: 300, height: 200 }}
      cardsData={images}
    />
  );
};

export default Certifications;
