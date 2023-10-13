import CardWithHeader from '@/components/CardWithHeader/CardWithHeader';
import Container from '@/components/Container/Container';

export default function Home() {
	if (typeof window !== 'undefined') {
		const response = window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*');
		console.log(response);
	}

	return (
		<main className='flex min-h-screen flex-col items-center justify-between py-24'>
			<Container>
				<CardWithHeader header='Hello World'>Test</CardWithHeader>
			</Container>
		</main>
	);
}
