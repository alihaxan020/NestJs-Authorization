import { Controller, Get, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
@Controller('payments')
export class PaymentsController {
  @Get()
  getPayments(@Req() req: Request, @Res() res: Response) {}
}
