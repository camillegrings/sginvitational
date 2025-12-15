import "@/styles/globals.css";

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from "gsap/Flip";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP, Flip);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
