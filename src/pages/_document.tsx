import Header from '@/component/Header';
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
			<Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
