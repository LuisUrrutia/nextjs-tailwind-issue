import "../styles/globals.css";
import React, { FC } from "react";
import type { AppProps } from "next/app";
import { wrapper } from "../app/store";
import GlobalStyles from "./../components/GlobalStyles";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(WrappedApp);
