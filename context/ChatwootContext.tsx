'use client';

import { Contact } from '@/types/ContactTypes';
import { createContext } from 'react';

interface ChatwootContextType {
  contact?: Contact | null;
}

export const ChatwootContext = createContext<ChatwootContextType>({});
