import Listing from './listing';
import User from './user';

export default interface Review {
  id: string;
  createdAt: Date;
  listingId: string;
  userId: string;
  comment: string;
  rating: number;

  listing: Listing;
  user: User;
}
