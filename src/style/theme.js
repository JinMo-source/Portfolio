const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletS: "1023px",
  tabletM: "1220px",
  tabletL: "1280px",
  labtop: "1460px",
  desktop: "1700px",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
  labtop: `only screen and (max-width: ${deviceSizes.labtop})`,
  desktop: `only screen and (max-width: ${deviceSizes.desktop})`,
};

const theme = {
  deviceSizes,
  device,
};

export default theme;
