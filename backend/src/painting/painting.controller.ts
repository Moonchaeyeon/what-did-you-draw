import { Controller, Get } from '@nestjs/common';
import { PaintingResponseDto } from './dto/response.dto';
import { PaintingService } from './service/painting.service';

@Controller('painting')
export class PaintingController {
  constructor(private readonly paintingService: PaintingService) {}

  @Get()
  async getUsers(): Promise<PaintingResponseDto[]> {
    return await this.paintingService.findAll();
  }
}