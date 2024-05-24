import { NextResponse, NextRequest } from 'next/server';
import { composeMiddleware } from 'src/backend/middlewares/handlers/compose';
import {
  ExampleHandler,
  ExampleHandler1,
  ExampleHandler2,
} from 'src/backend/middlewares/handlers/handler-example';

const middlewares = [ExampleHandler, ExampleHandler1, ExampleHandler2];

// This function can be marked `async` if using `await` inside
export const middleware = async (req: NextRequest) => {
  const handler = composeMiddleware(...middlewares);
  const res = NextResponse.next();

  return handler(req, res);
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api/|_next/static|_next/image|favicon.ico).*)',
  ],
};
