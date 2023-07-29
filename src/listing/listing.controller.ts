import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ListingService } from './listing.service';

@Controller('api/listing')
export class ListingController {
  constructor(private listingService: ListingService) {}

  @Get()
  async getAllListings() {
    return await this.listingService.getAllListings();
  }

  @Get(':id')
  async getListingByListingId(@Param('id') id: string) {
    return await this.listingService.getListingByListingId(id);
  }

  @Delete(':id')
  async deleteListing(@Param('id') id: string) {
    return await this.listingService.deleteListing(id);
  }
}
