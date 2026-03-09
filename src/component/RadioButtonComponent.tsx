import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const RadioButtonComponent = ({ list, value, setValue, label }: RadioButtonComponentTypes) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+(event.target as HTMLInputElement).value);
  };

  // generate safe unique id from label
  const baseId = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <FormControl
      sx={{
        paddingY: 1,
      }}
    >
      <FormLabel
        sx={{
          fontSize: "1rem",
          fontWeight: 500,
          color: "text.primary",
          mb: 1,
        }}
        id={`${baseId}-label`}
      >
        {label}
      </FormLabel>
      <RadioGroup
        aria-labelledby={`${baseId}-label`}
        name={`${baseId}-group`}
        value={value}
        onChange={handleChange}
        sx={{
          paddingLeft: 2,
          paddingY: 0,
        }}
      >
        {list.map((element) => {
          return (
            <FormControlLabel
              value={element.value}
              key={element.label}
              control={
                <Radio
                  size="small"
                  slotProps={{
                    root: {
                      sx: {
                        py: 0.5,
                      },
                    },
                  }}
                />
              }
              label={element.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonComponent;
