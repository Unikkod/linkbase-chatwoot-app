'use client';

import CardWithHeader from '@/components/CardWithHeader/CardWithHeader';
import Container from '@/components/Container/Container';

import useChatwoot from '@/hooks/useChatwoot';

export default function Home() {
  const { contact, conversation, agent } = useChatwoot();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-24'>
      <Container>
        {contact ? (
          <CardWithHeader header='Customer'>
            <div className='flex flex-col gap-4'>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.custom_attributes?.supabase_user_id}</p>
            </div>
          </CardWithHeader>
        ) : (
          <p>No contact found</p>
        )}
      </Container>
    </main>
  );
}
