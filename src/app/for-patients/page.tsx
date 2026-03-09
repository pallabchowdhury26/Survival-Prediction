import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ForPatients = () => {
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
          For Patients
        </Typography>
        <Typography mb={3}>
          If you are a patient on dialysis, the Dialysis vs. Kidney Transplant- Estimated Survival in Ontario tool could
          help you and your doctor talk about which treatment options are best for you.
        </Typography>
        <Typography mb={3}>
          Dialysis is a treatment that uses a machine to clean harmful wastes, salt, and extra fluid from your blood.
          Kidney transplantation is a surgery to replace your kidney with a healthy kidney. The healthy kidney may come
          from a deceased donor (someone who has recently died) or a living donor (someone who is alive, like a family
          member or friend). A person can live with only one healthy kidney.
        </Typography>
        <Typography mb={3}>
          Most patients with kidney disease who get a transplant live longer and have a better quality of life than
          patients on dialysis for a long period of time. The Dialysis vs. Kidney Transplant- Estimated Survival in
          Ontario tool shows your estimated risks of survival and death over three years. These estimates are based on
          characteristics of patients who are similar to you. These are estimates only. The information you enter in the
          tool is secure, will not be saved, and is automatically cleared after you use the tool.
        </Typography>
        <Typography mb={3}>
          Ask your doctor if you have any questions or concerns, or if you want to learn more about which treatment
          options are best for you. We also encourage you to talk to trusted and reliable family members and friends
          about your treatment options.
        </Typography>
        <Typography mb={3}>
          If you would like more information about kidney transplantation and living donation, you can visit the
          following website:{" "}
          <Link href={"http://www.renalnetwork.on.ca/TransplantPatientHub"} target="_blank">
            www.renalnetwork.on.ca/TransplantPatientHub
          </Link>
          .
        </Typography>
      </Box>
    </>
  );
};

export default ForPatients;
