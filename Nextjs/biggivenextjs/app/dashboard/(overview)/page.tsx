
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';


export default async function Page() {
	/*const revenue = await fetchRevenue();*/
	/*const latestInvoices = await fetchLatestInvoices();*/
	/*const cardData = await fetchCardData();*/

	return (
		<main>
			<h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
				Dashboard
			</h1>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			
			</div>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
				
			</div>
		</main>
	);
}