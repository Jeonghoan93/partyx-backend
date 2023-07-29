import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ListingController } from './listing.controller';
import { ListingService } from './listing.service';

@Module({
  imports: [PrismaModule],
  controllers: [ListingController],
  providers: [ListingService],
})
export class ListingModule {}
