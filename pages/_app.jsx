import "tailwindcss/tailwind.css";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import { Router } from "next/dist/client/router";
import Nprogress from "nprogress";

Nprogress.configure({ showSpinner: false, rickleSpeed: 50 });

Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
