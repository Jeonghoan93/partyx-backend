import Reservation from './Reservation';
import Review from './Review';
import Account from './account';
import Listing from './listing';

export default interface User {
  id: string;
  name?: string;
  email?: string;
  emailVerified?: Date;
  image?: string;
  hashedPassword?: string;
  createdAt: Date;
  updatedAt: Date;
  favoriteIds: string[];

  accounts: Account[];
  listings: Listing[];
  reservations: Reservation[];
  Review: Review[];
}
