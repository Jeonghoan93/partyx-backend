import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ListingService {
  constructor(public prisma: PrismaService) {}

  async getAllListings() {
    const listings = await this.prisma.listing.findMany();

    return listings;
  }

  async getListingByListingId(id: string) {
    const listing = await this.prisma.listing.findUnique({
      where: { id },
    });

    return listing;
  }

  async deleteListing(id: string) {
    const listing = await this.prisma.listing.findUnique({
      where: { id },
    });

    if (!listing) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    await this.prisma.listing.delete({
      where: { id },
    });

    return listing;
  }

  async registerListing(data: any) {
    const listing = await this.prisma.listing.create({
      ...data,
    });

    return listing;
  }
}
