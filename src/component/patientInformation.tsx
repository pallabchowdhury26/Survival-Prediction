"use client";

import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import FilterItem from "./FilterItem";
import BoxComponent from "./BoxComponent";
import { sexList, timesOnDialysisList, viewAsList } from "@/utils/filterList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  minHeight: "100%",
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: { xs: "flex", md: "none" },
  flexDirection: "column",
};

const handleTimes = (a: number, b: number) => {
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
  if (a === b && b === 0) return null;
  if (b === 0) return 0;

  return Math.round((a / b) * 10) / 10;
};

const PatientInformation = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [result, setResult] = useState<ResultInterface>({
    Dialysis: 0,
    Transplant: 0,
    DeceasedDonor: 0,
    LivingDonor: 0,
  });

  const [filterData, setFilterData] = useState<FilterData>({
    viewAs: viewAsList[0].value,
    sex: sexList[0].value,
    timesOnDialysis: timesOnDialysisList[0].value,
    age: 0,
    hypertension: false,
    diabetes: false,
    cardiovascularDisease: false,
  });

  const dialysisVsTransplant =
    filterData.viewAs === 0
      ? handleTimes(result.Dialysis, result.Transplant)
      : handleTimes(result.Transplant, result.Dialysis);
  const deceasedDonerVsLivingDoner =
    filterData.viewAs === 0
      ? handleTimes(result.DeceasedDonor, result.LivingDonor)
      : handleTimes(result.LivingDonor, result.DeceasedDonor);
  const isFiniteDialysisVsTransplant = Number.isFinite(dialysisVsTransplant);
  const isFiniteDeceasedDonerVsLivingDoner = Number.isFinite(deceasedDonerVsLivingDoner);

  return (
    <Box py={2} mt={2}>
      <Stack direction="row">
        <Stack width="25%" display={{ xs: "none", md: "flex" }}>
          <FilterItem setResult={setResult} filterData={filterData} setFilterData={setFilterData} />
        </Stack>
        <Stack width={{ xs: "100%", md: "75%" }}>
          <Stack width={"100%"} display={{ xs: "flex", md: "none" }} mb={1} alignItems={"flex-end"}>
            <Button onClick={handleOpen} variant="contained">
              Filter
            </Button>
          </Stack>
          <Box bgcolor={"#EFEFEF"} width={"100%"} mb={{ xs: 2, md: 4 }}>
            {isFiniteDialysisVsTransplant && (
              <Typography variant="h5" component="p" paddingY={1} textAlign="center">
                3 Year Risk Summary
              </Typography>
            )}
            <Stack direction={{ xs: "column", md: "row" }}>
              <BoxComponent
                bgcolor="#0099CC"
                title="Dialysis"
                value={result.Dialysis}
                shouldShow={isFiniteDialysisVsTransplant}
              />
              <BoxComponent
                bgcolor="#6B9B4F"
                title="Transplant"
                value={result.Transplant}
                shouldShow={isFiniteDialysisVsTransplant}
              />
            </Stack>
            {isFiniteDialysisVsTransplant && (
              <Typography variant="subtitle2" textAlign="left" p={0.5} fontWeight={400}>
                You are about <strong>{dialysisVsTransplant} times</strong> more likely to{" "}
                {filterData.viewAs === 0
                  ? "die while on Dialysis than with a Kidney Transplant"
                  : "survive with a Kidney Transplant than while on Dialysis"}{" "}
                in the next three years.
              </Typography>
            )}
          </Box>

          <Box bgcolor={"#EFEFEF"} width={"100%"}>
            {isFiniteDeceasedDonerVsLivingDoner && (
              <Typography variant="h5" component="p" paddingY={1} textAlign="center">
                3 Year Risk Summary
              </Typography>
            )}
            <Stack direction={{ xs: "column", md: "row" }}>
              <BoxComponent
                bgcolor="#0099CC"
                title="Deceased Donor"
                value={result.DeceasedDonor}
                shouldShow={isFiniteDeceasedDonerVsLivingDoner}
              />
              <BoxComponent
                bgcolor="#6B9B4F"
                title="Living Donor"
                value={result.LivingDonor}
                shouldShow={isFiniteDeceasedDonerVsLivingDoner}
              />
            </Stack>
            {isFiniteDeceasedDonerVsLivingDoner && (
              <Typography variant="subtitle2" textAlign="left" p={0.5} fontWeight={400}>
                You are about <strong>{deceasedDonerVsLivingDoner} times</strong> more likely to{" "}
                {filterData.viewAs === 0
                  ? "die with a Deceased Donor Transplant than with a Living Donor Transplant"
                  : "survive with a Living Donor Transplant than with a Deceased Donor Transplant"}{" "}
                in the next three years.
              </Typography>
            )}
            {isFiniteDeceasedDonerVsLivingDoner && (
              <Stack direction={"row"} columnGap={1} p={1} pt={0}>
                <Typography variant="subtitle1">Note:</Typography>
                <Typography variant="subtitle1" component="p">
                  Estimate assumes you would receive a kidney from a living or deceased donor on the same day. In
                  Ontario, the average wait time for a deceased donor kidney transplant is between 3-6 years. Wait times
                  can vary based on blood type and antibody levels.
                </Typography>
              </Stack>
            )}
          </Box>
        </Stack>
      </Stack>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography id="modal-modal-title" variant="h6" component="p" mb={2}>
              Filter
            </Typography>
            <CancelIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
          </Stack>
          <FilterItem setResult={setResult} filterData={filterData} setFilterData={setFilterData} />
        </Box>
      </Modal>
    </Box>
  );
};

export default PatientInformation;
