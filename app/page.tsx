"use client";

import { useEffect } from 'react';

import CardWithHeader from '@/components/CardWithHeader/CardWithHeader';
import Container from '@/components/Container/Container';

export default function Home() {
	const isJSONValid = (data: string) => {
		try {
			JSON.parse(data);
		} catch (error: any) {
      console.log('Invalid JSON', error);
			return false;
		}
		return true;
	}

	useEffect(() => {
		const handleResponse = (event: any) => {
      console.log('Received event from Chatwoot', event);

			if (typeof event.data !== 'string' || !isJSONValid(event.data)) {
				return;
			}

      console.log('Is valid JSON');

			const eventData = JSON.parse(event.data);
      console.log('eventData', eventData);
			if (eventData.type === 'chatwoot-dashboard-app:fetch-info') {
        console.log('eventData.payload', eventData.payload);
			}
		}

		window.addEventListener('message', handleResponse);

		// Request data from Chatwoot
		const response = window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*');
		console.log('response', response);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('message', handleResponse);
		};
	}, []);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between py-24'>
			<Container>
				<CardWithHeader header='Hello World'>Test</CardWithHeader>
			</Container>
		</main>
	);
}
