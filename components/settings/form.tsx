'use client';
import { useCallback, useEffect, useState } from 'react';
import { Database } from '@/models/database';
import {
  Session,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { useToast } from '@/components/ui/use-toast';
import Avatar from './avatar';

export default function SettingsForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const user = session?.user;
  const { toast } = useToast();

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      if (user && user.id !== undefined) {
        let { data, error, status } = await supabase
          .from('profiles')
          .select(`first_name, last_name, avatar_url`)
          .eq('id', user?.id)
          .single();
        if (error && status !== 406) {
          throw error.code;
        }
        if (data) {
          setFirstName(data.first_name);
          setLastName(data.last_name);
          setAvatarUrl(data.avatar_url);
        }
      } else {
        throw new Error('User not defined.');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem loading your settings.',
      });
    } finally {
      setLoading(false);
    }
  }, [user, supabase, toast]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    firstName,
    lastName,
    avatarUrl,
  }: {
    firstName: string | null;
    lastName: string | null;
    avatarUrl: string | null;
  }) {
    try {
      setLoading(true);

      let { error } = await supabase
        .from('profiles')
        .update({
          first_name: firstName,
          last_name: lastName,
          avatar_url: avatarUrl,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user?.id)
        .select();
      if (error) throw error;
      toast({
        title: 'Profile updated!',
        description: 'Your settings have been sucessfully updated.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget">
      <Avatar
        uid={user.id}
        url={avatarUrl}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url);
          updateProfile({ firstName, lastName, avatarUrl: url });
        }}
      />
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session?.user.email} disabled />
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={firstName || ''}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastName || ''}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() =>
            updateProfile({
              firstName,
              lastName,
              avatarUrl,
            })
          }
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>
    </div>
  );
}
