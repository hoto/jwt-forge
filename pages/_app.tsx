import { AppProps } from "next/app";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="text-slate-50 ">
      <Component {...pageProps} />
    </div>
  );
}
