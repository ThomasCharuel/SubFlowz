drop table if exists profiles;
drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();
truncate table auth.users restart identity cascade;

CREATE TABLE PROFILES (
	id uuid not null references auth.users on delete cascade,
	updated_at timestamp with time zone,
	username text unique,
	first_name text,
	last_name text,
	avatar_url text,
	primary key (id),
	constraint username_length check (char_length(username) >= 3)
);

-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
ALTER TABLE PROFILES ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile."
	ON PROFILES FOR SELECT
	using (auth.uid() = id);

create policy "Users can update their own profile."
	on profiles for update
	using (auth.uid() = id);

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
	insert into public.profiles (id)
	values (new.id);
	return new;
end;
$$;

create trigger on_auth_user_created
	after insert on auth.users
	for each row execute procedure public.handle_new_user();

