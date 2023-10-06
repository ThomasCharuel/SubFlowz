import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'SubFlowz',
	description: 'Generate your personalized flow of content subscriptions',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Toaster />
				<SupabaseProvider>
					<UserProvider>
						<Navbar />
						{children}
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
