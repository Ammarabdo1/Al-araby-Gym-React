import React, { useEffect } from "react";
import PricesHeader from "components/HeaderPage";
import pricesBg from "assets/images/pricesBg.jpg";
import ShowPrices from "components/Prices";
import PopUpPlanPrices from "components/Prices/PopUpPlanPrices/PopUpPlanPrices";
import useStore from "libs/useStore";
import bigPricesBg from 'assets/images/BigPricesBgHeader.jpg'

const Prices = () => {
  const { showPopupPrices } = useStore();
  useEffect(() => {
    document.body.style.overflow = showPopupPrices ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopupPrices]);

  return (
    <div>
      {showPopupPrices && <PopUpPlanPrices />}
      <PricesHeader
        title="الخطط والأسعار"
        headerBgImg={pricesBg}
        position="top"
        pigHeaderBgImg={bigPricesBg}
      />
      <ShowPrices />
    </div>
  );
};

export default Prices;
