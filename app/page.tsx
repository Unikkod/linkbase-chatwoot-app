import CardWithHeader from '@/components/CardWithHeader/CardWithHeader';
import Container from '@/components/Container/Container';

export default function Home() {
	if (typeof window !== 'undefined') {
		window.addEventListener('message', function (event) {
			if (
				typeof event.data !== 'string' ||
				!event.data.includes('appContext')
			) {
				return;
			}

			const eventData = JSON.parse(event.data);

			if (eventData.event === 'appContext') {
				const contactData = eventData.data.contact;
				console.log(contactData);
			}
		});
	}

	return (
		<main className='flex min-h-screen flex-col items-center justify-between py-24'>
			<Container>
				<CardWithHeader header='Hello World'>Test</CardWithHeader>
			</Container>
		</main>
	);
}
