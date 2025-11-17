import React from "react";
import Stack from "./Stack";

const Achivements = () => {
  const images = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dxauzebpd/image/upload/v1763291054/Certificates/Medal_m42vyk.png",
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

export default Achivements;
