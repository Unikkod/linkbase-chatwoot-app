"use client";

import { useEffect } from 'react';

import CardWithHeader from '@/components/CardWithHeader/CardWithHeader';
import Container from '@/components/Container/Container';

export default function Home() {



	useEffect(() => {
		const handleResponse = (event: any) => {
			if (typeof event.data !== 'string' || !isJSONValid(event.data)) {
				return;
			}
			const { data } = JSON.parse(event.data);

      const { contact, conversation, currentAgent: agent } = data;

      console.log('Contact', contact);
      console.log('Conversation', conversation);
      console.log('Agent', agent);
		}

		window.addEventListener('message', handleResponse);

		// Request data from Chatwoot
		window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*');

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('message', handleResponse);
		};
	}, []);

  const isJSONValid = (data: string) => {
		try {
			JSON.parse(data);
		} catch (error: any) {
			return false;
		}
		return true;
	}

	return (
		<main className='flex min-h-screen flex-col items-center justify-between py-24'>
			<Container>
				<CardWithHeader header='Hello World'>Test</CardWithHeader>
			</Container>
		</main>
	);
}
