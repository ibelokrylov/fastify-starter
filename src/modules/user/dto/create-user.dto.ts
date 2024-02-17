import { Static, Type } from '@sinclair/typebox';

export const CreateUserDto = Type.Object({
  // validate length of username
  username: Type.String({ minLength: 3 }),
  password: Type.String({ minLength: 8 }),
});

export type CreateUserDtoType = Static<typeof CreateUserDto>;
