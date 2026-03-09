import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const reference = [
  "Janssen KJ, Moons KG, Kalkman CJ, Grobbee DE, Vergouwe Y. Updating methods improved the performance of a clinical prediction model in new patients. J Clin Epidemiol. 2008;61(1): 76-86.",
  "Muller CJ and MacLehose RF. Estimating predicted probabilities from logistic regression: different methods correspond to different target populations. International Journal of Epidemiology. 2014; 43 (3); 962–970.",
];
const AboutTheModel = () => {
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
          About the Model
        </Typography>
        <Typography mb={3}>
          The concept for the Dialysis vs. Kidney Transplant- Estimated Survival in Ontario website was developed by
          Emory University and a team of researchers at Emory University, including Rachel E. Patzer, PhD, MPH, Mohua
          Basu, MPH, Michael Konomos, MS, Michael Patzer, BS, Christian Larsen, MD, DPhil, William M. McClellan, MD,
          MPH, David Howard, PhD, and Kimberly Jacob Arriola, PhD, MPH. The website is not sponsored or endorsed by
          Emory or otherwise connected with Emory. The data used to externally validate the models created by the Emory
          University team of researchers is based on Ontario data from 2004-2016 and then was translated into a website
          and iOS app. Data was validated by a team of Canadian researchers, including Kyla L. Naylor, PhD, Amit X.
          Garg, MD, PhD, Eric McArthur, MSc, Vivian Tan, BSc, and Megan McCallum, MPH.
        </Typography>
        <Typography mb={3} fontWeight={700}>
          Development of Dialysis vs. Kidney Transplant- Estimated Survival in Ontario Risk Estimates
        </Typography>
        <Typography mb={3}>
          For information on how the original tool (iChoose Kidney) was created, please see{" "}
          <Link href={"https://ichoosekidney.emory.edu/about/estimate-development.html"} target="_blank">
            ichoosekidney.emory.edu/about/estimate-development.html
          </Link>
          .
        </Typography>
        <Typography mb={3}>
          The Dialysis vs. Kidney Transplant- Estimated Survival in Ontario tool uses data from more than 20,000
          incident adult dialysis patients in Ontario and over 4000 kidney transplant recipients from January 1, 2004 to
          December 31, 2014, with follow-up through December 31, 2016. Logistic regression models were used to predict
          the 3-year risk of death for dialysis patients vs. transplant patients. Predictive accuracy of the models was
          assessed using the c-statistic of the associated receiver operating characteristic (ROC) curve, which
          estimates the probability of concordance between the observed number of deaths and the predicted number of
          deaths based on the model. Model calibration was assessed by comparing the observed and expected number of
          deaths for each model. To further examine model calibration smoothed calibration plots were produced,
          including their intercepts, slopes and the Brier score. A correction factor was used to recalibrate intercepts
          of the model, when appropriate.
          <a href={"#atm-ref-1"}>
            <sup>1</sup>
          </a>
        </Typography>
        <Typography mb={3}>Translation of Risk Estimates into a Risk Calculator</Typography>
        <Typography mb={3}>
          To transform our model coefficients (examples provided below) into an individualized 3-year mortality estimate
          the equation below was used
          <a href={"#atm-ref-2"}>
            <sup>2</sup>
          </a>
          :
        </Typography>
        <Box ml={{ xs: 0, sm: 10 }}>
          <Image
            src="/image/formula.gif"
            style={{ marginRight: "16px" }}
            alt="Formula for calculating 3-year mortality risk"
            width={311}
            height={83}
          />
        </Box>
        <Typography mb={3}>
          For example, 3-year mortality risk for a dialysis patient is derived from the formula below,
        </Typography>
        <Typography ml={{ xs: 2, sm: 5 }} mb={3}>
          -2.9578 (Baseline risk) + 0.0067(Female) + 0.0388(Age) -0.2990(Black race) -0.6111(Other Race) +
          0.4737(Cardiovascular disease) -0.4696(Hypertension) + 0.0169(Diabetes)
        </Typography>
        <Typography mb={3}>
          and 3-year mortality among transplant patients is derived from the formula below,
        </Typography>
        <Typography ml={{ xs: 2, sm: 5 }} mb={3}>
          -5.4292 (Baseline risk) -0.0475(Female) + 0.0382(Age) -0.0261(Black race) -0.508 (Other race) +
          0.3369(Cardiovascular disease) -0.2(Hypertension) + 0.4013 (Diabetes) + 0.136(6-12 months on dialysis) +
          0.4906({`>`}12 months on dialysis)
        </Typography>
        <Typography mb={3} fontWeight={700}>
          Where baseline risk=1; male=0, female= 1; 1=yes and 0=no for Black race, other race, cardiovascular disease,
          hypertension, diabetes, 6-12 months on dialysis, and {`>`}12 months on dialysis. Age is modeled as a
          continuous variable.
        </Typography>
        <Typography mb={3}>
          In this case, a 50 year old white male with a history of diabetes and hypertension who has been on dialysis
          for {`>`}12 months has a predicted probability of dying over the next 3 years of 19% on dialysis and 6% with a
          kidney transplant (relative risk of dying on dialysis vs. transplant is 3.2). Predicted probability of dying
          within the next three years with a deceased donor transplant (6%) is approximately 1.5 times higher than the
          predicted probability of dying with a living donor transplant (4%).
        </Typography>
        <Typography mb={3} fontWeight={700}>
          Prediction Model Discrimination and Performance
        </Typography>
        <Typography mb={3}>
          We performed an external validation of the risk prediction models for 3-year mortality in the dialysis and
          transplantation populations using Ontario data. The discriminatory ability of the model for 3-year mortality
          was moderate for dialysis (area under the curve [AUC] = 0.70 [95% confidence interval [CI]: 0.69-0.70] and for
          transplant (AUC =0.72 [95% CI: 0.69-0.75]). The AUC was 0.68 (95% CI: 0.64-0.71) for deceased donor transplant
          and 0.71 (95% CI: 0.64-0.78) for living donor transplant.
        </Typography>
        <Typography mb={3} fontWeight={700}>
          Reference:
        </Typography>

        {reference.map((element, index) => {
          return (
            <Stack id={`atm-ref-${index + 1}`} key={element} direction={"row"} mb={2}>
              <Typography mr={2}>{index + 1}.</Typography>
              <Typography>{element}</Typography>
            </Stack>
          );
        })}
      </Box>
    </>
  );
};

export default AboutTheModel;
