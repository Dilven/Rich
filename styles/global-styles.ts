import { theme } from '@styles/variables';
import { createGlobalStyle } from "styled-components";
import { CSSVariables } from "./variables";

export const GlobalStyles = createGlobalStyle<{ theme: typeof theme }>`
  html {
    --color-text: ${(props) => props.theme.white};
    --color-background: ${CSSVariables.theme.background};
    --color-primary: ${CSSVariables.theme.primary};

    --font-size-small: ${CSSVariables.mobile.fontSizeSmall}px;
    --font-size-medium: ${CSSVariables.mobile.fontSizeMedium}px;

    @media (min-width: 1024px) {
      --font-size-small: ${CSSVariables.desktop.fontSizeSmall}px;
      --font-size-medium: ${CSSVariables.desktop.fontSizeSmall}px;
    }
  }
`;