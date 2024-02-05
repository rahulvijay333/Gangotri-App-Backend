export default function connection(mongoose, config) {
  async function connectToMongo() {
    try {
      await mongoose.connect(config.mongo.uri);
      console.log('MongoDB connected successfully');
    } catch (err) {
      console.error('MongoDB connection error:', err.message);
    }
  }
  return {
    connectToMongo,
  }
}
