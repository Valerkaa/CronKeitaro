import {BadGatewayException, Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    throw new BadGatewayException("You don't have authorization to come in here.");
  }
}
