import {
	useUser as useSupaUser,
	useSessionContext,
	User,
} from '@supabase/auth-helpers-react';
import { createContext, useContext, useEffect, useState } from 'react';
import { UserProfile } from '@/models/user';

type UserContextType = {
	user: User | null;
	userProfile: UserProfile | null;
	isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
	undefined,
);

type UserContextProviderProps = {
	children: React.ReactNode;
};

export const UserContextProvider = (props: UserContextProviderProps) => {
	const { isLoading: isLoadingUser, supabaseClient: supabase } =
		useSessionContext();
	const user = useSupaUser();
	const [isLoadingData, setIsLoadingData] = useState(false);
	const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

	useEffect(() => {
		if (user && !isLoadingData && !userProfile) {
			setIsLoadingData(true);

			const getUserProfile = () =>
				supabase
					.from('profiles')
					.select('first_name, last_name, avatar_url')
					.eq('id', user?.id)
					.single();

			getUserProfile().then((res) => {
				setUserProfile({
					id: user?.id,
					firstName: res.data?.first_name,
					lastName: res.data?.last_name,
					avatarUrl: res.data?.avatar_url,
				});
				setIsLoadingData(false);
			});
		} else if (!user && !isLoadingUser && !isLoadingData) {
			setUserProfile(null);
		}
	}, [user, userProfile, isLoadingData, isLoadingUser, supabase]);
	const value = {
		user,
		userProfile,
		isLoading: isLoadingUser || isLoadingData,
	};
	return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error('useUser must be used within a MyUserContextProvider');
	}
	return context;
};
