import { createTheme } from "@mui/material";

export const colors = {
    title: ' #ffde87', // Page
    title_hover: 'rgba(255, 221, 135, 0.52)', // transparent Page
    subTitle:' #d08658', // red
    
    des: ' silver',
    des_hover: 'rgba(212, 212, 212, 0.57)', // transparent silver

    link: ' white',
    link_hover: ' gray',

    btn: ' #a33f3a', // red
    btn_bg: ' #ffde87', // page
    btn_hover_bg: ' #1f1f1f', // black

    bg: `linear-gradient(90deg ,rgb(13, 13, 13), rgb(0, 0, 0))`, // black2

    bg_hover: ' #1f1f1fb1', // black transparent
    bg_hover2: 'rgba(31, 31, 31, 0.79)', // black transparent
    after: ' #d08658', // red transparent
    after_hover: ' #d0865834', // red transparent
    after_hover2: 'rgba(208, 134, 88, 0.57)', // red transparent
    shadow: '1px 2px 4px 1px #ffdd87b8', // transparent
    shadow_color: ' #ffdd87b8',
    
    whatsApp: ' #5fffa2',
    facebook: ' #4fa4ff'
}

export const themes = {
    fontFamily: `"Cairo", sans-serif`,
    titleFontFamily: `'El Messiri', serif`,

}

export const media = {
    mobile: '480px',
    tablet: '900px',
    desktop: '1024px',
}

export const muiTheme = createTheme({
    direction: "rtl", // Ensures right-to-left layout
    components: {
      MuiPopover: {
        styleOverrides: {
          root: {
            zIndex: 200000, // Ensures dropdown appears above everything
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(20, 20, 20, 0.95)", // Dark background for dropdown
            color: "#fff", // Light text for contrast
            border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", // Dark shadow for depth
          },
        },
      },
    },
  });
  