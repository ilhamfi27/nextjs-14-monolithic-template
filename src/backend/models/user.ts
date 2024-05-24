export class UserEntity {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
  id!: string;
  email!: string;
  username!: string;
  password!: string;
  name!: string;
}
