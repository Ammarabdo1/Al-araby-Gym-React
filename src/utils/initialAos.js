export const InitialAos = (Aos) => {
  Aos.init({
    duration: 1000, // Default animation duration (override with `data-aos-duration` if needed)
    offset: 100, // Offset (trigger point from the element)
  });

  return () => {
    Aos.refresh();
  };
};
