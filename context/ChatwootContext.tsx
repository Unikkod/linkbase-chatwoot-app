'use client';

import { Contact } from '@/types/ContactTypes';
import { createContext } from 'react';

interface ChatwootContextType {
  contact?: Contact | null;
  licenses?: any;
  invoices?: any;
}

export const ChatwootContext = createContext<ChatwootContextType>({});
