'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import UserAvatar from './userAvatar';
import { useUser } from '@/hooks/useUser';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from './ui/navigation-menu';
import Link from 'next/link';

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
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									<UserAvatar />
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
										<li>
											<NavigationMenuLink asChild>
												<Link
													href="/settings"
													className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													Settings
												</Link>
											</NavigationMenuLink>
										</li>
										<li>
											<NavigationMenuLink asChild>
												<form
													action="/auth/signout"
													method="post"
													className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													<Button
														type="submit"
														variant="outline"
													>
														Sign out
													</Button>
												</form>
											</NavigationMenuLink>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			)}
		</div>
	);
};

export default Navbar;
