import { Box, Stack } from "@mui/material";
import Image from "next/image";

const Qrcode = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <Image
        src="/image/qrcode.44047926.png"
        alt="Scan this QR code to download the iOS app"
        width={300}
        height={300}
      />
    </Stack>
  );
};

export default Qrcode;
