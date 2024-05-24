import { encode } from 'src/backend/utils/jwt';
import { InternalAuthRequest } from '@/src/pages/api/internal/request';
import { config } from '@/config';

export class InternalService {
  public static readonly service: InternalService = new InternalService();
  static getService(): InternalService {
    return InternalService.service;
  }

  async login(request: InternalAuthRequest) {
    if (config.appEnv === 'production') {
      throw new Error(
        'Internal login is not available in production environment'
      );
    }
    return {
      token: await encode({ ...request, internal: true }),
    };
  }
}
