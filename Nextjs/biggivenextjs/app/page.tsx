import Image from "next/image";
import { Metadata } from 'next';


export const metadata: Metadata = {
	title: 'Big Give',
};

export default function Page() {
return (
	<main className="">
		<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"
			style={{width: '100%', height: 500, position: 'relative'} }
		>
			<Image
				className=""
				src="/bannerImage.jpg"
				alt="Next.js Logo"
				layout='fill'
				priority
			/>
		</div>


	</main>
);
}
