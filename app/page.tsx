'use client';

import { useContext } from 'react';

import { ChatwootContext } from '@/context/ChatwootContext';

import CardWithHeader from '@/components/CardWithHeader/CardWithHeader';
import LabelAndValue from '@/components/LabelAndValue/LabelAndValue';
import Columns from '@/components/Columns/Columns';

export default function Home() {
  const { contact } = useContext(ChatwootContext);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-10'>
      {contact ? (
        <Columns leftColumn={<CardWithHeader header='Customer'>Left</CardWithHeader>} rightColumn={<CardWithHeader header='Customer'>Right</CardWithHeader>}>
          <CardWithHeader header='Customer'>
            <div className='flex flex-col gap-4'>
              <LabelAndValue label='Name' value={contact.name} />
              <LabelAndValue label='Email' value={contact.email} />
              <LabelAndValue label='Supabase User ID' value={contact.custom_attributes?.supabase_user_id} />
              <LabelAndValue label='Organisation' value={contact.custom_attributes?.organisation} />
              <LabelAndValue label='Company' value={contact.custom_attributes?.company} />
            </div>
          </CardWithHeader>
        </Columns>
      ) : (
        <p>No contact found</p>
      )}
    </main>
  );
}
