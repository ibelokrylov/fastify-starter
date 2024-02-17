import { FastifyReply } from 'fastify';
import { ErrorTypeEnum } from '../enums/error-type.enum';

const errors: {
  [key in ErrorTypeEnum]: {
    code: number;
    message: ErrorTypeEnum;
  };
} = {
  [ErrorTypeEnum.USER_NOT_FOUND]: {
    code: 404,
    message: ErrorTypeEnum.USER_NOT_FOUND,
  },
  [ErrorTypeEnum.USER_ALREADY_EXISTS]: {
    code: 409,
    message: ErrorTypeEnum.SERVER_ERROR,
  },
  [ErrorTypeEnum.DEFAULT]: {
    code: 500,
    message: ErrorTypeEnum.SERVER_ERROR,
  },
  [ErrorTypeEnum.PASSWORD_NOT_MATCH]: {
    code: 404,
    message: ErrorTypeEnum.USER_NOT_FOUND,
  },
  [ErrorTypeEnum.SERVER_ERROR]: {
    code: 404,
    message: ErrorTypeEnum.SERVER_ERROR,
  },
  [ErrorTypeEnum.UNAUTHORIZED]: {
    code: 401,
    message: ErrorTypeEnum.UNAUTHORIZED,
  },
  [ErrorTypeEnum.AUTHENTICATED]: {
    code: 401,
    message: ErrorTypeEnum.AUTHENTICATED,
  },
};

export const generateErrorHelper = (
  error: ErrorTypeEnum,
  reply: FastifyReply,
  info?: any,
) => {
  const errorData = errors[error];
  reply.status(errorData.code).send({
    error: errorData.message,
    info: process.env.NODE_ENV === 'development' ? info : undefined,
  });
};
