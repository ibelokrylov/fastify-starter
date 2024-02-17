import { Prisma, PrismaClient } from '@prisma/client';

export type UserEntity = Prisma.UserGetPayload<{}>;
export type PublicUser = Omit<UserEntity, 'password' | 'hash'>;
