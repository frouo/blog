import { AppProps } from "next/app";
import "../styles/index.css";
import { useEffect } from "react";
import splitbee from "@splitbee/web";

export default function App({ Component, pageProps }: AppProps) {
  useEffect((): void => {
    splitbee.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    });
  }, []);

  return <Component {...pageProps} />;
}
