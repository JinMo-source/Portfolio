const deviceSizes = {
  // 모바일
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletS: "1024px",
  //menu btn
  tabletM: "1220px",
  tabletL: "1280px",
  //pc
  labtop: "1460px",
  desktop: "1700px",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletS: `only screen and (max-width: ${deviceSizes.tabletS})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
  labtop: `only screen and (max-width: ${deviceSizes.labtop})`,
  desktop: `only screen and (max-width: ${deviceSizes.desktop})`,
};

const theme = {
  deviceSizes,
  device,
};

export default theme;
