import React from "react";
import { useLocation } from "react-router-dom";
import { PlansTypes } from "./PlansTypes";
import Plan from "./Plan";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import ServiceInfo from "./ServiceInfo";
const ServicePlans = () => {
  const location = useLocation();
  const path = location.pathname;
  const serviceName = path.split("/").filter(Boolean).pop();
  return (
    <div style={{ overflow: "hidden" }}>
      <ServiceInfo serviceName={serviceName} />
      <Plans sx={{ flexDirection: { xs: "column", md: "row" } }}>
        {PlansTypes.map((planType) => (
          <Plan service={serviceName} planType={planType} />
        ))}
      </Plans>
    </div>
  );
};

const Plans = styled(Box)`
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export default ServicePlans;
