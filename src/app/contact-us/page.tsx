import { Box, Typography } from "@mui/material";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <Box>
        <Image
          src="/image/Logo_small.png"
          style={{ float: "left", marginRight: "16px" }}
          alt="Dialysis vs. Kidney Transplant app logo"
          width={180}
          height={176}
        />
        <Typography variant="h6" component="h2" mb={1}>
          Contact Us
        </Typography>
        <Typography fontWeight={700}>Kyla Naylor, PhD</Typography>
        <Typography>London Health Sciences Centre</Typography>
        <Typography mb={1}>London, Ontario</Typography>
        <Typography mb={3} fontWeight={700}>
          E-mail: <a href="mailto:kyla.naylor@lhsc.on.ca">kyla.naylor@lhsc.on.ca</a>
        </Typography>
      </Box>
    </>
  );
};

export default ContactUs;
