import { IsOptional } from 'class-validator';

export class RegisterListingDto {
  id: string;
  listing_url: string;
  name: string;
  description: string;
  summary: string;

  @IsOptional()
  space: string;

  imageSrc: string;
  createdAt: Date;
  category: string;
  minimumGuests: number;
  MaximumGuests: number;
  locationValue: string;
  price: number;
  userId: string;
  image: string;
  address: string;
  interaction: string;
  cancellation_policy: string;

  @IsOptional()
  event_rules: string;

  @IsOptional()
  event_type: string;

  @IsOptional()
  music_type: string;

  @IsOptional()
  latitude: string;

  @IsOptional()
  longitude: string;

  @IsOptional()
  rating: string;

  @IsOptional()
  first_review: Date;

  @IsOptional()
  last_review: Date;

  @IsOptional()
  amenities: string[];
}
