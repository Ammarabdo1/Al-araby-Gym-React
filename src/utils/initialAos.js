export const InitialAos = (Aos, once) => {
  Aos.init({
    duration: 1000, // Default animation duration (override with `data-aos-duration` if needed)
    offset: 100, // Offset (trigger point from the element)
    once: true,
  });

  return () => {
    Aos.refresh();
  };
};
