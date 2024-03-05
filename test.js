import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import collectBoot from "../assets/Animation/collectAmount.json";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "revert-layer",
  top: "28%",
  left: "16%",
};

const CollectBoot = () => {
  const lottieRef = useRef(null);

  const defaultOptions = {
    loop: true, // Set to true for continuous looping
    autoplay: false, // Set to true for automatic playback on mount
    animationData: collectBoot,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice", // Optional aspect ratio settings
    // },
  };

  // useEffect(() => {
  //   // Play the animation
  //   lottieRef.current.play();

  //   // Pause the animation after 2 seconds using setTimeout
  //   setTimeout(() => {
  //     lottieRef.current.pause();
  //   }, 2000); // 2 seconds in milliseconds
  // }, []);

  return (
    <Modal
      open={true}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={style}
    >
      <Box
      sx={style} 
      >
        <Lottie
          // ref={lottieRef}
          height={400}
          width={400}
          duration={2}
          options={defaultOptions}
        />
      </Box>
    </Modal>
  );
};

export default CollectBoot;
