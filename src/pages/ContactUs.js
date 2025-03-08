import React from "react";
import pigHeaderBgImg from "assets/images/ContactPigHeaderImage.jpg";
import headerBgImg from "assets/images/ContactHeaderImage.jpg";
import HeaderPage from "components/HeaderPage";
import { title } from "utils/titles-text";
import ContactInfo from "components/ContactusPage/ContactInfo";

const ContactUsPage = () => {
  return (
    <div>
      <HeaderPage
        title={title.page.contact}
        pigHeaderBgImg={pigHeaderBgImg}
        headerBgImg={headerBgImg}
      />
      <ContactInfo />
    </div>
  );
};

export default ContactUsPage;
