import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  name: String,
  age: Number,
});
