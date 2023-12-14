export interface Theme {
  name: string;
  background: {
    main: string;
    sectionheader: string;
    blockquote: string;
  };
  color: {
    markdownbody: string;
    sectionheader: string;
    previewbody: string;
    htmlheaders: string;
    h6: string;
    blockquote: string;
    code: string;
  };
  divider: string;
}

export interface Themes {
  light: Theme;
  dark: Theme;
}

export const themes: Themes = {
  light: {
    name: "light",
    background: {
      main: "#FFFFFF",
      sectionheader: "#F5F5F5",
      blockquote: "#F5F5F5",
    },
    color: {
      markdownbody: "#35393F",
      sectionheader: "#7C8187",
      previewbody: "#7C8187",
      htmlheaders: "#35393F",
      h6: "#E46643",
      blockquote: "#35393F",
      code: "#35393F",
    },
    divider: "#E4E4E4",
  },
  dark: {
    name: "dark",
    background: {
      main: "#151619",
      sectionheader: "#1D1F22",
      blockquote: "#2B2D31",
    },
    color: {
      markdownbody: "#C1C4CB",
      sectionheader: "#C1C4CB",
      previewbody: "#C1C4CB",
      htmlheaders: "#FFFFFF",
      h6: "#E46643",
      blockquote: "#FFFFFF",
      code: "#FFFFFF",
    },
    divider: "#5A6069",
  },
};
