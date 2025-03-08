import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { styled as muiStyled } from "@mui/system";
import { colors } from "libs/themes";
import { Typography } from "@mui/material";
import useStore from "libs/useStore";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: "rgba(20, 20, 20, 0.95)", // Dark background
      color: "#fff", // Light text color
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      maxWidth: 250,
      border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border for clarity
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", // Dark mode shadow
      textAlign: "right",
    },
  },
};

export default function SelectChoices({ select }) {
  const { serviceName, setServiceName, duration, setDuration, setSubPrices} = useStore();
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    if(select.type === "services") {
      const updateServices = typeof value === "string" ? value.split(",") : value
      setServiceName(updateServices)
      setSubPrices('service', updateServices.length);
      return;
    }
    setDuration(value);
    setSubPrices('duration', select.noOfMonths[value]);
  };

  return (
      <SelectController sx={{ m: 1, width: { xs: "95%", sm: 300 } }}>
        <SelectLabel id="demo-multiple-chip-label">
          {select.subTitle}
        </SelectLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple={select.type === "services"}
          value={select.type === "services" ? serviceName || [] : duration}
          onChange={handleChange}
          input={
            <OutlinedInput id="select-multiple-chip" label="اختر الخدمة" />
          }
          renderValue={(selected) => {
            if (select.type === "services") {
              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      sx={{
                        color: colors.after,
                        textShadow: "0px 0px 2px black ,2px 2px 4px black",
                        background: colors.after_hover2,
                      }}
                    />
                  ))}
                </Box>
              );
            } else {
              return (
                <Typography sx={{ color: colors.link }}>{selected}</Typography>
              );
            }
          }}
          MenuProps={MenuProps}
        >
          {select.choices.map((service) => (
            <MenuItem
              key={service}
              value={service}
              sx={{
                backgroundColor: "rgba(30, 30, 30, 0.9)", // Dark background
                color: "#fff", // Light text color
                "&:hover": {
                  backgroundColor: "rgba(50, 50, 50, 0.9)", // Lighter dark mode on hover
                },
                "&.Mui-selected": {
                  backgroundColor: colors.after_hover2, // Custom selected item color
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: colors.after_hover2, // Keep the same color on hover
                  },
                },
              }}
            >
              {service}
            </MenuItem>
          ))}
        </Select>
      </SelectController>
  );
}

const SelectLabel = muiStyled(InputLabel)({
  color: colors.des,
  fontSize: "1.2rem",
  textShadow: "2px 2px 3px black",
  "&.Mui-focused": {
    color: colors.after, // Label color after selection
  },
});

const SelectController = muiStyled(FormControl)({
  "& .MuiOutlinedInput-root": {
    color: "gray",
    background: "rgba(0, 0, 0, .3)",

    svg: {
      color: colors.des,
    },

    "& fieldset": {
      borderColor: colors.des, // Default outline color
    },
    "&:hover fieldset": {
      borderColor: "darkgray", // Hover effect
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.des, // Outline color after selection (focus state)
      color: colors.des,
    },
    "&.Mui-focused": {
      svg: {
        color: colors.after,
      },
    },

    "&.Mui-focused .MuiOutlinedInput-notchedOutline legend": {
      fontSize: "14px", // Change size when focused
    },
  },
});
