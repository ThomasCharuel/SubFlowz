'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import UserAvatar from './userAvatar';
import { useUser } from '@/hooks/useUser';

const Navbar = () => {
	const { user, userProfile } = useUser();
	console.log(userProfile);
	return (
		<div className="flex items-center p-4">
			<Image
				src="/images/logo.svg"
				height={30}
				width={140}
				alt="SubFlowz Logo"
			/>
			{user && (
				<div className="flex w-full justify-end">
					<UserAvatar />
					<form action="/auth/signout" method="post">
						<Button type="submit" variant="outline">
							Sign out
						</Button>
					</form>
				</div>
			)}
		</div>
	);
};

export default Navbar;
