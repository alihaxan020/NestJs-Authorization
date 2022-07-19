import {
  Controller,
  Get,
  Post,
  Req,
  Session,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  AuthenticatedAuthGuard,
  LocalAuthGuard,
} from 'src/auth/utils/LocalGuard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {}
  @Get('')
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session);
    console.log(session.id);
    session.authenticated = true;
    return session;
  }
  @UseGuards(AuthenticatedAuthGuard)
  @Get('status')
  async getAuthStatus() {}
}
