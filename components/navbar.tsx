'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import UserAvatar from './userAvatar';
import { useToast } from './ui/use-toast';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/models/database';
import { redirect, useRouter } from 'next/navigation';

const Navbar = () => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();
  const { toast } = useToast();
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem during sign out.',
      });
    }
    router.push('/');
  };
  return (
    <div className="flex items-center p-4">
      <Image
        src="/images/logo.svg"
        height={30}
        width={140}
        alt="SubFlowz Logo"
      />
      <div className="flex w-full justify-end">
        <UserAvatar />
        <Button onClick={handleSignOut} variant="outline">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
