import { PrismaClient } from '@prisma/client';
import { publicUserSerializer } from '../user/serializers/public-user.serializer';
import { PublicUser } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { AuthDtoType } from './dto/auth.dto';

export class AuthService {
  private readonly userService = new UserService();

  public async login(dto: AuthDtoType): Promise<PublicUser> {
    const user = await this.userService.dbUserWhere({
      where: { username: dto.username },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return publicUserSerializer(user);
  }
}
