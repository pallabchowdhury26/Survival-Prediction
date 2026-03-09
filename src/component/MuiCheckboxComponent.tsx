import { Checkbox, FormControlLabel } from "@mui/material";

const MuiCheckboxComponent = ({ label, value, setValue }: MuiCheckboxComponentTypes) => {
  return (
    <FormControlLabel
      sx={{ paddingLeft: 2 }}
      control={
        <Checkbox
          size="small"
          checked={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.checked)}
          slotProps={{
            input: { "aria-label": "controlled" },
            root: {
              sx: {
                paddingY: 0.5,
              },
            },
          }}
        />
      }
      label={label}
    />
  );
};

export default MuiCheckboxComponent;
