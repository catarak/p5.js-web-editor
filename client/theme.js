import lodash from 'lodash';

export const Theme = {
  contrast: 'contrast',
  dark: 'dark',
  light: 'light'
};

export const colors = {
  p5jsPink: '#ed225d',
  processingBlue: '#007BBB',
  p5jsActivePink: '#f10046',
  white: '#fff',
  black: '#000',
  yellow: '#f5dc23',
  orange: '#ffa500',
  red: '#ff0000',
  lightsteelblue: '#B0C4DE',
  dodgerblue: '#1E90FF',
  p5ContrastPink: ' #FFA9D9',

  borderColor: ' #B5B5B5',
  outlineColor: '#0F9DD7'
};

export const grays = {
  lightest: '#FFF', // primary
  lighter: '#FBFBFB',

  light: '#F0F0F0', // primary
  mediumLight: '#D9D9D9',
  middleLight: '#A6A6A6',

  middleGray: '#747474', // primary
  middleDark: '#666',
  mediumDark: '#4D4D4D',

  dark: '#333', // primary
  darker: '#1C1C1C',
  darkest: '#000'
};

export const common = {
  baseFontSize: 12,
  shadowColor: 'rgba(0, 0, 0, 0.16)'
};

export const remSize = (size) => `${size / common.baseFontSize}rem`;

export const prop = (key) => (props) => {
  const keypath = `theme.${key}`;
  const value = lodash.get(props, keypath);

  if (value == null) {
    throw new Error(`themed prop ${key} not found`);
  }

  return value;
};

export default {
  [Theme.light]: {
    colors,
    grays,
    ...common,
    primaryTextColor: grays.dark,
    inactiveTextColor: grays.middleDark,
    heavyTextColor: grays.darker,
    backgroundColor: grays.lighter,

    Button: {
      default: {
        foreground: colors.black,
        background: grays.light,
        border: grays.middleLight
      },
      hover: {
        foreground: grays.lightest,
        background: colors.p5jsPink,
        border: colors.p5jsPink
      },
      active: {
        foreground: grays.lightest,
        background: colors.p5jsActivePink,
        border: colors.p5jsActivePink
      },
      disabled: {
        foreground: colors.black,
        background: grays.light,
        border: grays.middleLight
      }
    },
    Icon: {
      default: grays.middleGray,
      hover: grays.darker
    },
    MobilePanel: {
      default: {
        foreground: colors.black,
        background: grays.light,
        border: grays.middleLight
      }
    },
    Modal: {
      background: grays.light,
      border: grays.middleLight,
      button: grays.dark
    },
    Separator: grays.middleLight,

    TabHighlight: colors.p5jsPink,
    SketchList: {
      background: grays.lighter,
      card: {
        background: grays.lighter
      }
    },
    logoColor: {
      default: {
        fill: colors.p5jsPink,
        stroke: colors.p5jsPink
      },
      hover: {
        fill: grays.darker,
        stroke: colors.p5jsPink
      }
    },
    tableRowStripeColor: {
      default: grays.mediumLight,
      alternate: grays.mediumLight
    },
    toolbarButton: {
      color: grays.dark,
      backgroundColor: grays.mediumLight
    },
    toast: {
      textColor: grays.lightest,
      backgroundColor: grays.mediumDark
    },
    iconToastHoverColor: grays.lightest,
    preferencesButtonBackgroundColor: grays.mediumLight
  },
  [Theme.dark]: {
    colors,
    grays,
    ...common,
    primaryTextColor: grays.lightest,
    inactiveTextColor: grays.middleLight,
    heavyTextColor: grays.lightest,
    backgroundColor: grays.darker,

    Button: {
      default: {
        foreground: grays.light,
        background: grays.dark,
        border: grays.middleDark
      },
      hover: {
        foreground: grays.lightest,
        background: colors.p5jsPink,
        border: colors.p5jsPink
      },
      active: {
        foreground: grays.lightest,
        background: colors.p5jsActivePink,
        border: colors.p5jsActivePink
      },
      disabled: {
        foreground: grays.light,
        background: grays.dark,
        border: grays.middleDark
      }
    },
    Icon: {
      default: grays.middleLight,
      hover: grays.lightest
    },
    MobilePanel: {
      default: {
        foreground: grays.light,
        background: grays.dark,
        border: grays.middleDark
      }
    },
    Modal: {
      background: grays.dark,
      border: grays.middleDark,
      button: grays.lightest
    },
    Separator: grays.middleDark,

    TabHighlight: colors.p5jsPink,
    SketchList: {
      background: grays.darker,
      card: {
        background: grays.dark
      }
    },
    logoColor: {
      default: {
        fill: colors.p5jsPink,
        stroke: colors.p5jsPink
      },
      hover: {
        fill: grays.lightest,
        stroke: colors.p5jsPink
      }
    },
    tableRowStripeColor: {
      default: grays.dark,
      alternate: grays.darker
    },
    toolbarButton: {
      color: grays.lightest,
      backgroundColor: grays.mediumDark
    },
    toast: {
      textColor: grays.lightest,
      backgroundColor: grays.mediumDark
    },
    iconToastHoverColor: grays.lightest,
    preferencesButtonBackgroundColor: grays.middleDark
  },
  [Theme.contrast]: {
    colors,
    grays,
    ...common,
    primaryTextColor: grays.lightest,
    inactiveTextColor: grays.light,
    heavyTextColor: grays.yellow,
    backgroundColor: grays.darker,

    Button: {
      default: {
        foreground: grays.light,
        background: grays.dark,
        border: grays.middleDark
      },
      hover: {
        foreground: grays.dark,
        background: colors.yellow,
        border: colors.yellow
      },
      active: {
        foreground: grays.dark,
        background: colors.p5jsActivePink,
        border: colors.p5jsActivePink
      },
      disabled: {
        foreground: grays.light,
        background: grays.dark,
        border: grays.middleDark
      }
    },
    Icon: {
      default: grays.mediumLight,
      hover: colors.yellow
    },
    MobilePanel: {
      default: {
        foreground: grays.light,
        background: grays.dark,
        border: grays.middleDark
      }
    },
    Modal: {
      background: grays.dark,
      border: grays.middleDark,
      button: grays.dark
    },
    Separator: grays.middleDark,

    TabHighlight: grays.darker,
    SketchList: {
      background: colors.yellow,
      card: {
        background: grays.dark
      }
    },
    logoColor: {
      default: {
        fill: colors.yellow,
        stroke: colors.yellow
      },
      hover: {
        fill: colors.yellow,
        stroke: colors.yellow
      }
    },
    tableRowStripeColor: {
      default: grays.dark,
      alternate: grays.darker
    },
    toolbarButton: {
      color: grays.dark,
      backgroundColor: grays.mediumLight
    },
    toast: {
      textColor: grays.lightest,
      backgroundColor: grays.mediumDark
    },
    iconToastHoverColor: colors.yellow,
    preferencesButtonBackgroundColor: grays.mediumLight
  }
};
