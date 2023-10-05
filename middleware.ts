import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { type NextRequest, NextResponse } from 'next/server';

const authenticatedUsersReservedRoutes = ['/home', '/settings'];
const unauthenticatedUsersReservedRoutes = [
  '/login',
  '/signup',
  '/password_reset',
];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If user is signed in and the current path is / redirect the user to /home
  if (
    user &&
    unauthenticatedUsersReservedRoutes.includes(req.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL('/home', req.url));
  }
  if (
    !user &&
    authenticatedUsersReservedRoutes.includes(req.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}
