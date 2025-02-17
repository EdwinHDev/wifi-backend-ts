import { Request, Response } from 'express'
import { dbConnection, dbDisconnect } from "../config/connection"
import Client from '../models/Client'

// create client
export const createClient = async (req: Request, res: Response) => {
  const { name, identity, email, phone, age, gender, location, access_point, operating_system } = req.body

  await dbConnection()
  const existingClient = await Client.findOne({ identity })

  if (!existingClient) {
    try {
      const newClient = new Client({ name, identity, email, phone, age, gender, location, access_point, operating_system })
      await newClient.save()
      res.status(201).json({ message: 'Cliente creado correctamente' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error interno del servidor' })
    }
  } else {
    res.status(200).json({ message: 'El cliente ya esta creado' })
  }

  await dbDisconnect()
}

// get clients
export const getClients = async (req: Request, res: Response) => {
  try {
    await dbConnection()
    const clients = await Client.find()

    res.status(200).json(clients)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}