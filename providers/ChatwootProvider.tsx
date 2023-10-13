'use client';

import { ChatwootContext } from '@/context/ChatwootContext';

import useChatwoot from '@/hooks/useChatwoot';

const ChatWootProvider = ({ children }: { children: React.ReactNode }) => {
  const { contact } = useChatwoot();

  return <ChatwootContext.Provider value={{ contact }}>{children}</ChatwootContext.Provider>;
};

export default ChatWootProvider;
