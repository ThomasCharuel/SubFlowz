import { useToast } from '@/components/ui/use-toast';
import { useSessionContext } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';

const useUserAvatar = (url: string | null) => {
	const { toast } = useToast();
	const { supabaseClient: supabase } = useSessionContext();
	const [avatarUrl, setAvatarUrl] = useState(url);
	useEffect(() => {
		async function downloadImage(path: string) {
			try {
				const { data, error } = await supabase.storage
					.from('avatars')
					.download(path);
				if (error) {
					throw error;
				}
				const url = URL.createObjectURL(data);
				setAvatarUrl(url);
			} catch (error) {
				toast({
					variant: 'destructive',
					title: 'Uh oh! Something went wrong.',
					description: 'There was a problem downloading image.',
				});
			}
		}
		if (url) downloadImage(url);
	}, [url, supabase, toast]);

	return avatarUrl;
};

export default useUserAvatar;
