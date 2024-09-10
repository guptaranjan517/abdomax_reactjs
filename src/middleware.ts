import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Define route mappings
  const routes: Record<string, string> = {
    '/': '/home',
    '/progress': '/progress',
    '/listOfPrice': '/listOfPrice',
    '/medicalNotice': '/medicalNotice',
    '/contactUs': '/contactUs',
    '/bookAppointment': '/bookAppointment'
  };

  // Check if the request path matches any of the routes
  if (routes[url.pathname]) {
    url.pathname = routes[url.pathname];
    return NextResponse.rewrite(url);
  }

  // If no match, allow the request to proceed as usual
  return NextResponse.next();
}
