
const desktop = {
  fontSizeSmall: 21,
  fontSizeMedium: 21,
}

const mobile = {
  fontSizeSmall: 16,
  fontSizeMedium: 22,
}

const defaultMedia = mobile;

export const CSSVariables = {
  text: 'black',
  background: 'white',
  primary: 'rebeccapurple',
  fontSizeSmall: defaultMedia.fontSizeMedium,
  fontSizeMedium: defaultMedia.fontSizeMedium,
} as const;

export const CSSVariables1 = {
  colorText: '--color-text',
  background: '--color-background',
  primary: 'rebeccapurple',
  fontSizeSmall: defaultMedia.fontSizeMedium,
  fontSizeMedium: defaultMedia.fontSizeMedium,
} as const;


export const cvar = (varName: keyof typeof CSSVariables) => {
  
}