import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StoreProvider from '@/pages/StoreProvider';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
		<SessionProvider session={session}>
			<StoreProvider>
				<Component {...pageProps} />
			</StoreProvider>
		</SessionProvider>
);
}
