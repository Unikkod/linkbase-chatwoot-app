'use client';

import { useContext } from 'react';

import { ChatwootContext } from '@/context/ChatwootContext';

import CardWithHeader from '@/components/CardWithHeader/CardWithHeader';
import LabelAndValue from '@/components/LabelAndValue/LabelAndValue';
import Columns from '@/components/Columns/Columns';

import { ILicense } from '@/types/LicenseTypes';
import Table from '@/components/Table/Table';

export default function Home() {
  const { contact, licenses } = useContext(ChatwootContext);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-10'>
      {contact ? (
        <Columns
          rightColumn={
            <CardWithHeader header='Customer'>
              <div className='flex flex-col gap-4'>
                <LabelAndValue label='Company' value={contact.custom_attributes?.company} />
                <LabelAndValue label='Organisation' value={contact.custom_attributes?.organisation} />
                <LabelAndValue label='Email' value={contact.email} />
                <LabelAndValue label='Supabase UUID' value={contact.custom_attributes?.supabase_user_id} />
              </div>
            </CardWithHeader>
          }
        >
          <CardWithHeader header='Licenses'>
            <div className='flex flex-col gap-4'>{licenses?.length > 0 ? <Table headers={['License', 'Active']} data={licenses.map((license: ILicense) => [license.license, license.active ? 'Active' : 'Inactive'])} /> : <p>No licenses found</p>}</div>
          </CardWithHeader>
        </Columns>
      ) : (
        <p>No contact found</p>
      )}
    </main>
  );
}
