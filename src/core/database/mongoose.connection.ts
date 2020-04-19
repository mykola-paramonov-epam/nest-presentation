import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from 'nestjs-config';

export default MongooseModule.forRootAsync({
  useFactory: (config: ConfigService) => {
    const { host, port, username, password, database } = config.get('database.mongo');

    return {
      uri: `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };
  },
  inject: [ConfigService],
});
