import { MongoClient, Collection } from 'mongodb'
import { GymModel } from '../../../../domain/models/gym-model'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (url: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect () {
    await this.client.close()
  },

  get_collection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (collection: any): GymModel => {
    const { _id, ...gymWithoutId } = collection
    return Object.assign({}, gymWithoutId, { id: _id })
  }
}
