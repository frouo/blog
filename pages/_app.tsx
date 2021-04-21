import { AppProps } from "next/app";
import "../styles/index.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtm from "../lib/gtm";
import splitbee from "@splitbee/web";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtm.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect((): void => {
    splitbee.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    });
  }, []);

  return <Component {...pageProps} />;
}
