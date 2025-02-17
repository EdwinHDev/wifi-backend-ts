import mongoose from 'mongoose'
import { IClient } from '../types/client'


const clientSchema = new mongoose.Schema<IClient>({
  name: { type: String, required: true, lowercase: true },
  email: { type: String, required: true },
  identity: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  access_point: { type: String, default: '' },
  location: { type: [Number], default: [0,0] },
}, { timestamps: true })

const Client = mongoose.model<IClient>('Client', clientSchema)

export default Client