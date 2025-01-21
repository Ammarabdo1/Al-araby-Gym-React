import { useEffect } from "react";
import Aos from 'aos'
export const InitialAos = (options = {}) => {
  useEffect(() => {
    Aos.init({
      duration: options.duration || 1000, //! Default animation duration
      // once: options.once || false, //! Trigger only once
      once: true,
      ...options, //! Spread additional options
    });

    // Optional refresh if DOM updates
    return () => {
      Aos.refresh();
    };
  }, [options]);
};
