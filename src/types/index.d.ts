type Binary = 0 | 1;

interface PatientInput {
  age: number; // integer
  sex: number; // male=0, female=1
  cardiovascular: Binary; // 1=yes, 0=no
  hypertension: Binary; // 1=yes, 0=no
  diabetes: Binary; // 1=yes, 0=no
  dialysis6to12?: Binary; // only for transplant models
  dialysisOver12?: Binary; // only for transplant models
}

interface RadioButtonComponentTypes {
  list: { label: string; value: number }[];
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  label: string;
}

interface TextFeildComponentTypes {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  label: string;
}

interface MuiCheckboxComponentTypes {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  label: string;
}

interface ResultInterface {
  Dialysis: number;
  Transplant: number;
  DeceasedDonor: number;
  LivingDonor: number;
}

interface FilterData {
  viewAs: number;
  sex: number;
  timesOnDialysis: number;
  age: number;
  hypertension: boolean;
  diabetes: boolean;
  cardiovascularDisease: boolean;
}
