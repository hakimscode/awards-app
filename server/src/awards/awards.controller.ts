import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AwardsService } from './awards.service';
import { FindAllDto } from './dto/find-all.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('awards')
export class AwardsController {
  constructor(private readonly awardsService: AwardsService) {}

  @Post('list')
  @UseGuards(AuthGuard('jwt'))
  findAll(@Body() findAllDto: FindAllDto) {
    return this.awardsService.findAll(findAllDto);
  }
}
