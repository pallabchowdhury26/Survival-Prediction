function logistic(score: number): number {
  const expScore = Math.exp(score);
  return expScore / (1 + expScore);
}

function dialysisMortalityRisk(p: PatientInput): number {
  const score =
    -3.1319 +
    0.0067 * p.sex +
    0.0388 * p.age +
    0.4737 * p.cardiovascular -
    0.4696 * p.hypertension +
    0.0169 * p.diabetes;

  return logistic(score);
}

function transplantMortalityRisk(p: PatientInput): number {
  const score =
    -5.14242 -
    0.0475 * p.sex +
    0.0382 * p.age +
    0.3369 * p.cardiovascular -
    0.2 * p.hypertension +
    0.4013 * p.diabetes +
    0.136 * (p.dialysis6to12 ?? 0) +
    0.4906 * (p.dialysisOver12 ?? 0);

  return logistic(score);
}

function deceasedDonorRisk(p: PatientInput): number {
  const score =
    -4.59048 -
    0.1517 * p.sex +
    0.0391 * p.age +
    0.1732 * (p.dialysis6to12 ?? 0) +
    0.1605 * (p.dialysisOver12 ?? 0) +
    0.308 * p.cardiovascular -
    0.1801 * p.hypertension +
    0.273 * p.diabetes;

  return logistic(score);
}

function livingDonorRisk(p: PatientInput): number {
  const score =
    -6.01012 -
    0.1231 * p.sex +
    0.0364 * p.age +
    0.0614 * (p.dialysis6to12 ?? 0) +
    0.3202 * (p.dialysisOver12 ?? 0) +
    0.5908 * p.cardiovascular -
    0.1417 * p.hypertension +
    0.4418 * p.diabetes;

  return logistic(score);
}

const calculation = (patient: PatientInput, viewAs: number) => {
  if (patient.age < 18 || patient.age > 80) {
    return {
      Dialysis: 0,
      Transplant: 0,
      DeceasedDonor: 0,
      LivingDonor: 0,
    };
  }
  const Dialysis = Math.round(dialysisMortalityRisk(patient) * 100);
  const Transplant = Math.round(transplantMortalityRisk(patient) * 100);
  const DeceasedDonor = Math.round(deceasedDonorRisk(patient) * 100);
  const LivingDonor = Math.round(livingDonorRisk(patient) * 100);

  if (viewAs === 1) {
    return {
      Dialysis: 100 - Dialysis,
      Transplant: 100 - Transplant,
      DeceasedDonor: 100 - DeceasedDonor,
      LivingDonor: 100 - LivingDonor,
    };
  } else {
    return {
      Dialysis,
      Transplant,
      DeceasedDonor,
      LivingDonor,
    };
  }
};

export default calculation;
