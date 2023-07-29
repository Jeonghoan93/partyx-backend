import Listing from './listing';
import User from './user';

export default interface Reservation {
  id: string;
  userId: string;
  listingId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  createdAt: Date;

  user: User;
  listing: Listing;
}
