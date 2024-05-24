import {
  Body,
  Get,
  HttpCode,
  Post,
  Res,
} from 'next-api-decorators';
import { type NextApiResponse } from 'next';
import { SessionGuard } from 'src/backend/middlewares/api/decorators/SessionGuard';
import { SESSION_COOKIE_NAME } from '@/src/constants/auth';
import { InternalAuthRequest } from './request';
import { InternalService } from '@/src/backend/domains/internal.service';
import { BaseHandler, enhancedHandler } from '@/src/backend/handler/api-handler';

class InternalHandler extends BaseHandler {
  /**
   * @swagger
   * /internal/auth/login:
   *   post:
   *     description: Login for developer on this portal
   *     tags:
   *       - Internal
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         description: Authenticated
   */
  @Post('/auth/login')
  @HttpCode(200)
  async show(@Body() body: InternalAuthRequest, @Res() res: NextApiResponse) {
    const data = {
      ...body,
      internal: true,
    };
    const response = await InternalService.getService().login(data);
    res.setHeader(
      'Set-Cookie',
      `${SESSION_COOKIE_NAME}=${response.token}; Path=/; HttpOnly`
    );
    return response;
  }

  /**
   * @swagger
   * /internal/auth/logout:
   *   get:
   *     description: Logout for internal developer
   *     tags:
   *       - Internal
   *     responses:
   *       200:
   *         description: Authenticated
   */
  @Get('/auth/logout')
  @SessionGuard()
  @HttpCode(200)
  async logout(@Res() res: NextApiResponse) {
    res.setHeader('Set-Cookie', `${SESSION_COOKIE_NAME}=; Path=/; HttpOnly`);
    return { message: 'Logout success' };
  }
}

export default enhancedHandler(InternalHandler);
