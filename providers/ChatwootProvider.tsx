'use client';

import { ChatwootContext } from '@/context/ChatwootContext';

import useChatwoot from '@/hooks/useChatwoot';

const ChatWootProvider = ({ children }: { children: React.ReactNode }) => {
  const { contact, licenses, invoices } = useChatwoot();

  return <ChatwootContext.Provider value={{ contact, licenses, invoices }}>{children}</ChatwootContext.Provider>;
};

export default ChatWootProvider;
