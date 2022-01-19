const sizes = {
  desktopL: '100vw',
  // desktop: '1400px',
  tablet: '954px',
  mobile: '393px',
};
const Device = {
  desktopL: `(min-width: ${sizes.desktopL})`,
  // desktop: `(min-width: ${sizes.desktop})`,
  tablet: `(min-width: ${sizes.tablet})`,
  mobile: `(min-width: ${sizes.mobile})`,
};
export default Device;
