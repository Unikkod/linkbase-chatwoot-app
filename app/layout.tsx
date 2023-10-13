import type { Metadata } from 'next';
import ChatWootProvider from '@/providers/ChatwootProvider';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import './globals.css';

export const metadata: Metadata = {
  title: 'Chatwoot Dashboard App',
  description: 'Fetching contact data from Chatwoot',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <ChatWootProvider>
        <body className={`${inter.className} dark custom-bg`}>{children}</body>
      </ChatWootProvider>
    </html>
  );
}
