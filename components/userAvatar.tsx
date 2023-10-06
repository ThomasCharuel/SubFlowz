import { useUser } from '@/hooks/useUser';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useUserAvatar from '@/hooks/useUserAvatar';

const UserAvatar = () => {
	const { userProfile } = useUser();
	const avatarUrl = useUserAvatar(userProfile?.avatarUrl || null);

	return (
		<Avatar>
			{avatarUrl && <AvatarImage src={avatarUrl} />}
			<AvatarFallback>
				{userProfile?.firstName?.charAt(0)}
				{userProfile?.lastName?.charAt(0)}
			</AvatarFallback>
		</Avatar>
	);
};

export default UserAvatar;
