import { NextApiRequest, NextApiResponse } from 'next';
import { NextFunction, createMiddlewareDecorator } from 'next-api-decorators';
import { UserService } from 'src/backend/domains/user.service';
import { SESSION_COOKIE_NAME } from 'src/constants/auth';
import { RequestContext } from 'src/backend/request-context/request-context';

export const SessionGuard = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
    const session = req.cookies[SESSION_COOKIE_NAME];
    if (!session) {
      res.status(401).json({ message: 'Unauthorized' });

      return;
    }

    const user = await UserService.getService().me(session);
    RequestContext.setContext({ user });

    return next();
  }
);
