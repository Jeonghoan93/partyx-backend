import Reservation from './Reservation';
import Review from './Review';
import User from './user';

export default interface Listing {
  id: string;
  listing_url: string;
  name: string;
  description: string;
  summary: string;
  space?: string;
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

  event_rules?: string;
  event_type?: string;
  music_type?: string;
  latitude?: number;
  longitude?: number;
  rating?: number;
  first_review?: Date;
  last_review?: Date;

  user: User;

  amenities: string[];
  reviews: Review[];
  reservations: Reservation[];
}
