import styled from "@emotion/styled";
import { Box, Tab, Tabs } from "@mui/material";
import { colors, media } from "libs/themes";
import * as React from "react";
import { services } from "utils/Services";
import { useNavigate, useParams } from "react-router-dom";
import { AfterLayout } from "utils/GeneralStyles";
import fireImage from "assets/images/Fire.png";

const ServicesTabs = () => {
  const { serviceName } = useParams();
  const currentService = serviceName;
  const [selectTab, setSelectTab] = React.useState(
    services.findIndex((service) => service.name === currentService)
  );
  const navigate = useNavigate();
  const handelChange = (e, newValue) => {
    setSelectTab(newValue);
    navigate(`/prices/${services[newValue].name}`);
  };
  return (
    <TabsContainer
      sx={{ background: colors.bg, display: "flex", justifyContent: "center" }}
      id="servicesSec"
    >
      <ServiceTabs
        sx={{}}
        value={selectTab}
        onChange={handelChange}
        variant="scrollable"
        aria-label="Tabs for various training services"
        fullWidth
      >
        {services.map((service, index) => (
          <ServiceTab key={index} label={service.title} icon={service.icon} />
        ))}
      </ServiceTabs>
    </TabsContainer>
  );
};

const TabsContainer = styled(Box)`
  .MuiTabs-root {
    padding: 40px 0;
    border-bottom: 1px solid ${colors.btn_hover_bg};
  }
  .MuiTabs-indicator {
    background-color: ${colors.subTitle};
    box-shadow: 0 -10px 40px 3px ${colors.subTitle};
  }

  position: relative;
  z-index: 2;
  &::after {
    ${AfterLayout()}
    background-image: url(${fireImage});
    @media (max-width: ${media.mobile}) {
      background-size: contain;
    }
    opacity: 0.5;
  }
`;

const ServiceTabs = styled(Tabs)``;

const ServiceTab = styled(Tab)`
  color: ${colors.des};
  box-shadow: 0 0 10px 1px ${colors.des};
  margin-left: 20px;
  &.Mui-selected {
    color: ${colors.subTitle} !important;
  }

  @media (min-width: ${media.mobile}) {
    margin: 0 10px;
  }
`;

export default ServicesTabs;
