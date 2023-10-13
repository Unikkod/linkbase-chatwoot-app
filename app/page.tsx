"use client";

import { useEffect } from 'react';

import CardWithHeader from '@/components/CardWithHeader/CardWithHeader';
import Container from '@/components/Container/Container';

export default function Home() {
	const isJSONValid = (data: string) => {
		try {
			JSON.parse(data);
		} catch (e) {
			return false;
		}
		return true;
	}

	useEffect(() => {
		const handleResponse = (event: any) => {
      console.log('Received event from Chatwoot');

			if (typeof event.data !== 'string' || !isJSONValid(event.data)) {
				return;
			}

			const eventData = JSON.parse(event.data);
			if (eventData.type === 'chatwoot-dashboard-app:fetch-info') {
				console.log(eventData.payload);
			}
		}

		window.addEventListener('message', handleResponse);

		// Request data from Chatwoot
		window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*');

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
