import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from './auth/auth.module';
import { ListingModule } from './listing/listing.module';

@Module({
  imports: [UserModule, AuthModule, ListingModule],
})
export class AppModule {}
