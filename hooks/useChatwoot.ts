import { useEffect, useState } from 'react';

import { contact as initialState } from '@/modules/contact';
import { Contact } from '@/types/ContactTypes';

const useChatwoot = () => {
  const [contact, setContact] = useState<Contact | null>(initialState);
  const [conversation, setConversation] = useState<any | null>(null);
  const [agent, setAgent] = useState<any | null>(null);

  const isJSONValid = (data: string) => {
    try {
      JSON.parse(data);
    } catch (error: any) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    const handleResponse = (event: any) => {
      if (typeof event.data !== 'string' || !isJSONValid(event.data)) {
        return;
      }
      const { data } = JSON.parse(event.data);

      const { contact, conversation, currentAgent: agent } = data;

      setContact(contact);
      setConversation(conversation);
      setAgent(agent);
    };

    window.addEventListener('message', handleResponse);

    // Request data from Chatwoot
    window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*');

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', handleResponse);
    };
  }, []);

  return { contact, conversation, agent };
};

export default useChatwoot;
