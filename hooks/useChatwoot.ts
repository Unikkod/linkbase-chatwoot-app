import { useEffect, useState } from 'react';

import { createBackendInstance } from '@/utils/instances';

import { contact as initialContact } from '@/modules/contact';
import { licenses as initialLicense } from '@/modules/licenses';

import { Contact } from '@/types/ContactTypes';
import { Licenses } from '@/types/LicenseTypes';

const useChatwoot = () => {
  const [contact, setContact] = useState<Contact | null>(initialContact);
  const [licenses, setLicenses] = useState<Licenses | null>(initialLicense);
  const [invoices, setInvoices] = useState<any | null>(null);
  const [conversation, setConversation] = useState<any | null>(null);
  const [agent, setAgent] = useState<any | null>(null);

  const backend = createBackendInstance();

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

      fetchAccount(contact.custom_attributes.supabase_user_id);
    };

    window.addEventListener('message', handleResponse);

    // Request data from Chatwoot
    window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*');

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', handleResponse);
    };
  }, []);

  // Fetch account from backend
  const fetchAccount = async (userID: string | undefined) => {
    if (!userID) return;
    try {
      const {
        data: { account },
      } = await backend.get(`/account/${userID}`);

      setLicenses(account.connections);
      setInvoices(account.invoices);
    } catch (error: any) {
      console.log(error);
    }
  };

  return { contact, conversation, agent, licenses, invoices };
};

export default useChatwoot;
