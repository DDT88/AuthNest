import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    console.log("sono decoretor user ");
    const request = context.switchToHttp().getRequest();
    return request.currentUser;
  },
);
