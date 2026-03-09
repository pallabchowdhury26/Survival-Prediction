import { FormControl, TextField, Typography } from "@mui/material";

const TextFeildComponent = ({ label, value, setValue }: TextFeildComponentTypes) => {
  return (
    <FormControl
      sx={{
        paddingY: 1,
      }}
    >
      <label htmlFor="age-input">
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            color: "text.primary",
            mb: 1,
          }}
          component="p"
        >
          {label}
        </Typography>
      </label>
      <TextField
        id="age-input"
        variant="outlined"
        value={value || ""}
        type="number"
        sx={{
          paddingLeft: 2,
          width: 100,
          "& .MuiInputBase-input": {
            padding: "6px 16px",
          },
          "& input[type=number]": {
            MozAppearance: "textfield", // Firefox
          },
          "& input[type=number]::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "& input[type=number]::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ccc",
              borderWidth: 1,
            },
            "&:hover fieldset": {
              borderColor: "#ccc",
              borderWidth: 1,
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ccc",
              borderWidth: 1,
            },
          },
        }}
        onChange={(e) => setValue(+e.target.value)}
      />
    </FormControl>
  );
};

export default TextFeildComponent;
