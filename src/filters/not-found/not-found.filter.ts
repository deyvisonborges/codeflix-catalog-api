import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(NotFoundException)
export class NotFoundFilter<NotFoundException> implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse();

    response.status(404).json({
      statusCode: 404,
      error: `Not found`,
      message: exception,
    });
  }
}
