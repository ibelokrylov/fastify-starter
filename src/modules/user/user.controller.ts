import { FastifyInstance } from 'fastify';
import { authHook } from '../../lib/hook/auth.hook';
import { DefaultResponseTypes } from '../../lib/types/default-response.types';
import { CreateUserDto, CreateUserDtoType } from './dto/create-user.dto';
import { PublicUser } from './user.entity';
import { UserService } from './user.service';
import { ErrorTypeEnum } from '../../lib/enums/error-type.enum';
import { generateErrorHelper } from '../../lib/helpers/generate-error.helper';
import { isNotAuthHook } from '../../lib/hook/is-not-auth.hook';

export async function userController(fastify: FastifyInstance) {
  const userService = new UserService();
  fastify.get<{
    Reply: DefaultResponseTypes<PublicUser>;
  }>('/user', {
    preHandler: authHook,
    handler: async (req, reply) => {
      try {
        const user = await userService.getUserProfile({
          id: req.session.data.user_id as string,
        });
        reply.send({
          data: user,
        });
      } catch (error) {
        generateErrorHelper(ErrorTypeEnum.DEFAULT, reply);
      }
    },
  });

  fastify.post<{
    Body: CreateUserDtoType;
    Reply: DefaultResponseTypes<PublicUser>;
  }>('/user', {
    schema: {
      body: CreateUserDto,
    },
    preHandler: isNotAuthHook,
    handler: async (req, reply) => {
      try {
        const user_data = await userService.createUser({
          dto: req.body,
        });
        console.log('🚀 ~ userController ~ user_data:', user_data);
        reply.send({
          data: user_data,
        });
      } catch (error) {
        generateErrorHelper(ErrorTypeEnum.DEFAULT, reply);
      }
    },
  });
}
