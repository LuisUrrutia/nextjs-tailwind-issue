import React from "react";
import { createGlobalStyle } from "styled-components/macro";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const purple = theme`colors.purple.500`;
const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${purple};
    ${tw`antialiased`}
  }
  [multiple], [type=date], [type=datetime-local], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=time], [type=url], [type=week], select, textarea {
    ${tw`appearance-none`}
    ${tw`bg-white`}
    ${tw`border-gray-500`}
    ${tw`border-solid`}
    ${tw`border`}
    ${tw`p-3`}
    ${tw`pt-2`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
