import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultServiceClass } from '../../lib/class/default-service.class';
import { generateRandomStringHelper } from '../../lib/helpers/generated-random-string.helper';
import { CreateUserDtoType } from './dto/create-user.dto';
import { publicUserSerializer } from './serializers/public-user.serializer';
import { UserEntity, PublicUser } from './user.entity';
import { hashPasswordHelper } from '../../lib/helpers/hash-password.helper';

export class UserService extends DefaultServiceClass {
  public async getUserProfile({
    id,
  }: {
    id: UserEntity['id'];
  }): Promise<PublicUser> {
    const user = await this.prisma.user.findFirst({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return publicUserSerializer(user);
  }

  public async createUser({
    dto,
  }: {
    dto: CreateUserDtoType;
  }): Promise<PublicUser> {
    const user = await this.prisma.user.findFirst({
      where: { username: dto.username },
    });
    if (user) {
      throw new Error('User already exists');
    }
    const hash = generateRandomStringHelper(32);
    const password = await hashPasswordHelper({ password: dto.password, hash });
    const new_user: Prisma.UserCreateInput = {
      hash,
      username: dto.username,
      password,
    };
    const created_user = await this.prisma.user.create({ data: new_user });
    return publicUserSerializer(created_user);
  }

  public async dbUserWhere(
    args: Prisma.UserFindFirstArgs,
  ): Promise<UserEntity | null> {
    return await this.prisma.user.findFirst(args);
  }
  public async dbUsersWhere(
    args: Prisma.UserFindManyArgs,
  ): Promise<UserEntity[]> {
    return await this.prisma.user.findMany(args);
  }
}
