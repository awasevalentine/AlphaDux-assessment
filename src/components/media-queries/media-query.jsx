const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '1820px',
  };


  export const device = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };


  const maxMobileSizes = {
    mobileS: '320px',
    mobileM: '478px',
    mobileL: '767px',
    // medium: '991px',
    // laptop: '1200px',
    // laptopL: '1440px',
    // desktop: '2560px',
  };

  export const maxMobileDevice = {
    mobileS: `(max-width: ${maxMobileSizes.mobileS})`,
    mobileM: `(max-width: ${maxMobileSizes.mobileM})`,
    mobileL: `(max-width: ${maxMobileSizes.mobileL})`,
  };
  