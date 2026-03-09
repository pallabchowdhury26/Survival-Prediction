import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { keyframes } from "@mui/system";
import { useEffect, useState } from "react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const totalImages = 100;

const BoxComponent = ({
  bgcolor,
  title,
  value,
  shouldShow,
}: {
  bgcolor: string;
  title: string;
  value: number;
  shouldShow: boolean;
}) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const images = Array.from({ length: totalImages }, (_, i) => (i < value ? "white" : "blue"));

  useEffect(() => {
    setVisibleCount(0); // reset animation when value changes
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleCount(i);
      if (i >= totalImages) clearInterval(interval);
    }, 20); // stagger speed
    return () => clearInterval(interval);
  }, [value]); // run effect whenever value changes

  return (
    <Stack
      rowGap={{ xs: 0, md: 1 }}
      py={{ xs: 0.5, md: 1 }}
      width={{ xs: "100%", md: "50%" }}
      bgcolor={bgcolor}
      color={"white"}
    >
      <Typography variant="h5" component="p" fontWeight={700} textAlign="center">
        {title}
      </Typography>
      {shouldShow && (
        <Stack direction={"row"} my={1} justifyContent={"space-around"} alignItems={"center"}>
          <Box width={"20%"}>
            <Typography fontSize={"26px"} fontWeight={700} textAlign={"right"}>
              {value}%
            </Typography>
          </Box>
          <Box width={"70%"}>
            <Typography fontWeight={700} textAlign={"left"} lineHeight={{ xs: "15px", md: "21px" }}>
              risk of dying in next three years {title === "Dialysis" ? "while on" : "with a"} {title}
            </Typography>
          </Box>
        </Stack>
      )}
      <Box paddingX={1} width={"fit-content"} mx={"auto"} minHeight={{ xs: 120, sm: 140 }}>
        <div className="imageGrid">
          {images.slice(0, visibleCount).map((type, i) => (
            <Box
              key={i}
              component="img"
              src={`/image/${type}.png`}
              alt={`${title} ${i + 1}`}
              width={18}
              height={28}
              sx={{
                width: "100%",
                height: "auto",
                opacity: 0,
                animation: `${fadeIn} 0.5s forwards`,
                animationDelay: `${i * 20}ms`, // stagger 20ms per image
              }}
            />
          ))}
        </div>
      </Box>
      {shouldShow && (
        <Typography
          paddingTop={1}
          fontWeight={700}
          textAlign={"center"}
          lineHeight={{ xs: "15px", md: "21px" }}
          mx="auto"
          width={{ xs: "95%", md: "80%" }}
        >
          Among similar people, {value} out of 100 people will die in the next three years{" "}
          {title === "Dialysis" ? "on" : "with a"} {title}
        </Typography>
      )}
    </Stack>
  );
};

export default BoxComponent;
