import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme, planColor }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: planColor.hover,
    color: planColor.light,
    boxShadow: `0 0 0 2px ${planColor.hover}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function PlanAvatar({ planColor, type }) {
  return (
    <Box sx={{position: 'absolute', top: '0'}}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
        planColor={planColor}
      >
        <Avatar
          alt="price logo"
          src={`/images/plansLogos/${type}PlanLogo.JPG`}
          sx={{ width: 56, height: 56 }}
        />
      </StyledBadge>
    </Box>
  );
}
