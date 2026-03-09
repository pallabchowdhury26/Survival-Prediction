import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import PatientInformation from "@/component/patientInformation";

export default function Home() {
  return (
    <>
      <Box>
        <Image
          src="/image/Logo_smaller.png"
          style={{ float: "left", marginRight: "16px" }}
          alt="Dialysis vs. Kidney Transplant app logo"
          width={100}
          height={98}
        />
        <Typography>
          The Dialysis vs. Kidney Transplant- Estimated Survival in Ontario risk calculator is a tool for doctors,
          social workers, nurses, and/or patient educators to use with patients with kidney disease. The tool was
          created to help patients make more educated treatment decisions and shows estimates for a patient's 3-year
          risk of survival and death with different treatment options (dialysis or transplant). This tool has only been
          externally validated in the Ontario dialysis population and cannot be used to estimate risk in the
          pre-dialysis population. To see a patient's estimated risk in two different situations, please fill out the
          patient information in the form below on the left.
          <strong>
            The Dialysis vs. Kidney Transplant - Estimated Survival in Ontario risk calculator should not be used to
            identify patients who may not be good transplant candidates and should only be used with patients who are
            reasonable candidates for a kidney transplant.
          </strong>{" "}
          Please review the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"/pdf/instructions-2.pdf"}
          >
            Instructions for Use
          </a>{" "}
          document prior to using the Dialysis vs. Kidney Transplant- Estimated Survival in Ontario risk calculator.
        </Typography>
      </Box>
      <PatientInformation />
      
      <Box paddingY={2}>
        The concept for this app was developed by Emory University and a team of researchers at Emory University,
        including Rachel E. Patzer, PhD, MPH, Mohua Basu, MPH, Michael Konomos, MS, Michael Patzer, BS, Christian
        Larsen, MD, DPhil, William M. McClellan, MD, MPH, David Howard, PhD, and Kimberly Jacob Arriola, PhD, MPH. The
        Dialysis vs. Kidney Transplant- Estimated Survival in Ontario website is not sponsored or endorsed by Emory or
        otherwise connected with Emory. The data used to externally validate the models created by the Emory University
        team of researchers is based on Ontario data from 2004-2016. Data was validated by a team of Canadian
        researchers, including Kyla L. Naylor, PhD, Amit X. Garg, MD, PhD, Eric McArthur, MSc, Vivian Tan, BSc, and
        Megan McCallum, MPH. Authors have no conflicts of interest; authors and author affiliations are not affected by
        the decisions patients make after using the Dialysis vs. Kidney Transplant- Estimated Survival in Ontario tool.
        Support for this work was funded in part by the Canadian Institutes of Health Research (CIHR) SPOR Networks in
        Chronic Disease (Canadians Seeking Solutions and Innovations to Overcome Chronic Kidney Disease [Can-SOLVE CKD])
        (
        <Link href={"https://cansolveckd.ca"} target="_blank">
          https://cansolveckd.ca
        </Link>
        ). When using the Dialysis vs. Kidney Transplant- Estimated Survival in Ontario risk calculator you are agreeing
        to the{" "}
        <a
          href={"/pdf/Estimated-Survival-in-Ontario-with-Dialysis-versus-Kidney-Transplant-website-terms-of-use.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Use
        </a>
        .
      </Box>
    </>
  );
}
