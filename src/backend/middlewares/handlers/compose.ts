import { NextRequest, NextResponse } from 'next/server';

type Middleware = (
  req: NextRequest,
  res: NextResponse
) => Promise<NextResponse | void>;

export function composeMiddleware(...middlewares: Middleware[]) {
  return async (
    req: NextRequest,
    res: NextResponse
  ): Promise<NextResponse | void> => {
    let index = -1;

    const next = async (): Promise<NextResponse | void> => {
      index++;
      if (index >= middlewares.length) return;

      const middleware = middlewares[index];
      const result = await middleware(req, res);
      if (result instanceof NextResponse) {
        return result;
      }

      return next();
    };

    return next();
  };
}
