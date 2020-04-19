import { Module } from '@nestjs/common';
import MongooseConnectionModule from './mongoose.connection';

@Module({
  imports: [MongooseConnectionModule],
  exports: [MongooseConnectionModule],
})
export class DatabaseModule {}
