'use client';

import { useContext } from 'react';

import { ChatwootContext } from '@/context/ChatwootContext';

import CardWithHeader from '@/components/CardWithHeader/CardWithHeader';
import Container from '@/components/Container/Container';
import LabelAndValue from '@/components/LabelAndValue/LabelAndValue';

export default function Home() {
  const { contact } = useContext(ChatwootContext);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-24'>
      <Container>
        {contact ? (
          <CardWithHeader header='Customer'>
            <div className='flex flex-col gap-4'>
              <LabelAndValue label='Name' value={contact.name} />
              <LabelAndValue label='Email' value={contact.email} />
              <LabelAndValue label='Supabase User ID' value={contact.custom_attributes?.supabase_user_id} />
            </div>
          </CardWithHeader>
        ) : (
          <p>No contact found</p>
        )}
      </Container>
    </main>
  );
}
