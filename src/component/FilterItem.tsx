import calculation from "@/utils/calculation";
import { FormControl, FormLabel, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import RadioButtonComponent from "./RadioButtonComponent";
import TextFeildComponent from "./TextFeildComponent";
import MuiCheckboxComponent from "./MuiCheckboxComponent";
import { sexList, timesOnDialysisList, viewAsList } from "@/utils/filterList";

const FilterItem = ({
  setResult,
  filterData,
  setFilterData,
}: {
  setResult: Dispatch<SetStateAction<ResultInterface>>;
  setFilterData: Dispatch<SetStateAction<FilterData>>;
  filterData: FilterData;
}) => {
  useEffect(() => {
    const patient: PatientInput = {
      age: filterData.age,
      sex: filterData.sex,
      cardiovascular: filterData.cardiovascularDisease ? 1 : 0,
      hypertension: filterData.hypertension ? 1 : 0,
      diabetes: filterData.diabetes ? 1 : 0,
      dialysis6to12: filterData.timesOnDialysis === 1 ? 1 : 0,
      dialysisOver12: filterData.timesOnDialysis === 2 ? 1 : 0,
    };

    setResult(calculation(patient, filterData.viewAs));
  }, [filterData]);

  const updateValues = <K extends keyof FilterData>(key: K, val: FilterData[K]) => {
    setFilterData((prev) => ({
      ...prev,
      [key]: val,
    }));
  };
  return (
    <>
      <Typography fontSize={"18px"} fontWeight={700}>
        Patient Information
      </Typography>
      <RadioButtonComponent
        label="View As"
        list={viewAsList}
        value={filterData.viewAs}
        setValue={(val: number) => updateValues("viewAs", val)}
      />
      <TextFeildComponent
        label="Age (18-80)"
        value={filterData.age}
        setValue={(val: number) => updateValues("age", val)}
      />
      <RadioButtonComponent
        label="Sex"
        list={sexList}
        value={filterData.sex}
        setValue={(val: number) => updateValues("sex", val)}
      />
      <RadioButtonComponent
        label="Time on Dialysis"
        list={timesOnDialysisList}
        value={filterData.timesOnDialysis}
        setValue={(val: number) => updateValues("timesOnDialysis", val)}
      />

      <FormControl sx={{ paddingY: 1 }} component="fieldset">
        <FormLabel
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            color: "text.primary",
            mb: 1,
          }}
          component="legend"
          id="patient-history-label"
        >
          Patient History
        </FormLabel>
        <MuiCheckboxComponent
          label="Hypertension"
          value={filterData.hypertension}
          setValue={(val: boolean) => updateValues("hypertension", val)}
        />
        <MuiCheckboxComponent
          label="Diabetes"
          value={filterData.diabetes}
          setValue={(val: boolean) => updateValues("diabetes", val)}
        />
        <MuiCheckboxComponent
          label="Cardiovascular Disease"
          value={filterData.cardiovascularDisease}
          setValue={(val: boolean) => updateValues("cardiovascularDisease", val)}
        />
      </FormControl>
    </>
  );
};

export default FilterItem;
