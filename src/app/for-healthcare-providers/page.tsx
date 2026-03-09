import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const reference = [
  "USRDS. US Renal Data System 2010 Annual Data Report: Atlas of Chronic Kidney Disease and End-Stage Renal Disease in the United  States. Bethesda, MD: National Institutes of Health, National Institute of Diabetes and Digestive and Kidney Diseases; 2010.",
  "Danovitch GM. Options for Patients with Kidney Failure. In: Danovitch GM, ed. Handbook of Kidney Transplantation. 2nd ed. Philadelphia: Lippincott Williams & Wilkins; 2005:1-22.",
  "Tonelli M, Wiebe N, Knoll G, Bello A, Browne S, Jadhav D, et al. Systematic review: kidney transplantation compared with dialysis in clinically relevant outcomes. Am J Transplant. Oct 2011;11(10):2093-2109.",
  "Canadian Institute for Health Information. Canadian Organ Replacement Register Annual Report: Treatment of End-Stage Organ Failure in Canada, 2001 to 2010. Ottawa, ON: CIHI; 2011.",
  "Wolfe RA, VB Ashby, EL Milford, AO Ojo, RE Ettenger, LY Agodoa, PJ Held, FK Port. Comparison of mortality in all patients on dialysis, patients on dialysis awaiting transplantation, and recipients of a first cadaveric transplant. N Eng J Med. 1999;341(23):1725-1730.",
  "Patzer RE, McPherson L, Basu M, Mohan S, Wolf M, Chiles M, Russell A, Gander JC, Friedewald JJ, Ladner D, Larsen CP, Pearson T, Pastan S. Effect of the iChoose Kidney Decision Aid in Improving Knowledge about Treatment Options among Transplant Candidates: a Randomized Controlled Trial. Am J Transplant. 2018. doi: 10.1111/ajt.14693. [Epub ahead of print]",
];

const ForHealthCareProvider = () => {
  return (
    <>
      <Box>
        <Image
          src="/image/Logo_small.png"
          style={{ float: "left", marginRight: "16px" }}
          alt="Dialysis vs. Kidney Transplant app logo"
          width={100}
          height={98}
        />
        <Typography variant="h6" component="h2" mb={1}>
          For Healthcare Providers
        </Typography>
        <Typography mb={3}>
          Patients with end-stage kidney disease have two primary treatment options: long-term dialysis or kidney
          transplantation.
          <a href={"#fhp-ref-1"}>
            <sup>1</sup>
          </a>{" "}
          For most patients with kidney disease, transplantation is the optimal treatment because of longer survival,
          better quality of life, and lower hospitalization rates compared to dialysis.
          <a href={"#fhp-ref-2"}>
            <sup>2-4</sup>
          </a>{" "}
          The survival benefit is present across different patient subgroups, and many gain 10 or more years of life
          expectancy.
          <a href={"#fhp-ref-3"}>
            <sup>3</sup>
          </a>{" "}
          However, the relative survival advantage associated with transplantation varies substantially depending on
          individual characteristics, including age, race, and various medical comorbidities.
          <a href={"#fhp-ref-5"}>
            <sup>5</sup>
          </a>
        </Typography>
        <Typography mb={3}>
          The purpose of the Dialysis vs. Kidney Transplant- Estimated Survival in Ontario tool is to provide
          individualized, tailored prognosis estimates to patients with kidney disease so they can be informed of the
          mortality risks associated with either dialysis vs. living or deceased donor kidney transplantation. The risk
          estimates of mortality provided in Dialysis vs. Kidney Transplant- Estimated Survival in Ontario tool are based on
          data from Ontario health administrative databases in Ontario (2011-2024). The individualized risk estimates that are
          provided were generated and externally validated using multivariable logistic regression models; therefore,
          the risks provided are risks of mortality based on patients similar with respect to age, and
          comorbidities as the patient whose information is entered into the patient information form. Please refer to{" "}
          <Link href={"/about-the-model"}>About the model</Link> to learn how estimates in the tool are calculated.
        </Typography>
        <Typography mb={3}>
          Providers – including doctors, social workers, nurses, and/or patient educators can use this 
          tool with patients they think may be reasonable candidates for transplantation. The
          mortality risk estimates are intended for patients who are receiving maintenance dialysis.
        </Typography>
        <Typography mb={3}>
          A randomized controlled trial of the United States version of this tool (iChoose Kidney -{" "}
          <Link href={"http://www.ichoosekidney.emory.edu/"} target="_blank">
            www.ichoosekidney.emory.edu
          </Link>
          ) supports the use of the tool to improve knowledge about survival in transplantation versus dialysis.
          <a href={"#fhp-ref-6"}>
            <sup>6</sup>
          </a>{" "}
          Specifically, 470 patients presenting for a transplant evaluation from three U.S. transplant centres were
          randomized to receive standard transplant education (control) versus standard transplant education plus
          iChoose Kidney (intervention). Transplant knowledge improved from pre- to post- evaluation significantly more
          in the intervention group compared to the control. Further, 95% of surveyed transplant nephrologists and
          surgeons who used the tool thought that there is benefit to using this tool in regular clinical practice.
        </Typography>
        <Typography mb={3}>
          While there are few absolute contraindications for transplant, there may be some patients for whom transplant
          is not a good option or is not the patient’s preference for treatment. For these patients, the use of this
          risk calculator is discouraged. Of note, this application was built using data for adult patients (18-80
          years), and thus the use of this tool with children who have kidney disease is not validated.
        </Typography>
        <Typography mb={3}>
          For additional resources on kidney transplantation and living donation, you can visit the following website:
          <Link href={"http://www.renalnetwork.on.ca/TransplantProviderHub"} target="_blank">
            www.renalnetwork.on.ca/TransplantProviderHub.
          </Link>
        </Typography>
        <Typography mb={3} fontWeight={700}>
          References
        </Typography>

        {reference.map((element, index) => {
          return (
            <Stack id={`fhp-ref-${index + 1}`} key={element} direction={"row"} mb={2}>
              <Typography mr={2}>{index + 1}.</Typography>
              <Typography>{element}</Typography>
            </Stack>
          );
        })}
      </Box>
    </>
  );
};

export default ForHealthCareProvider;
