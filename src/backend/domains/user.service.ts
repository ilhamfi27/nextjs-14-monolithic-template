import { validate } from '../utils/jwt';
import { UserEntity } from '../models/user';
import { Nullable } from '@/src/@types/nullable';

export class UserService {
  public static readonly service: UserService = new UserService();
  static getService(): UserService {
    return UserService.service;
  }

  async me(token: string) {
    const validated = await validate<{ internal: string; username: string }>(
      token
    );

    let response: Nullable<UserEntity> = null;
    if (validated.payload.internal) {
      response = {
        username: validated.payload.username,
      } as UserEntity;
    } else {
      // TODO when integrated with database
      response = {} as UserEntity;
    }

    return response;
  }
}
