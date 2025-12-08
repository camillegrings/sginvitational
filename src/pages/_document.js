import { Html, Head, Main, NextScript } from "next/document";
import { leagueSpartan } from '@fonts'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={leagueSpartan.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
