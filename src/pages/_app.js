import "@/styles/globals.css";

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from "gsap/Flip";
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollSmoother, SplitText);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
