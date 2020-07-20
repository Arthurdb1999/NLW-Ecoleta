import knex from '../database/connection'
import { Request, Response } from 'express'

class PointsController {
    async create(req: Request, res: Response) {
        const { name, email, whatsapp, latitude, longitude, city, uf, items } = req.body

        const t1 = await knex.transaction()

        try {
            const point = {
                image: req.file.filename,
                name, email, whatsapp, latitude, longitude, city, uf
            }

            const insertedIds = await t1('points').insert(point)

            const pointItems = items.split(',')
                .map((item: string) => Number(item.trim()))
                .map((item_id: Number) => {
                    return {
                        item_id,
                        point_id: insertedIds[0]
                    }
                })
            await t1('point_items').insert(pointItems)

            await t1.commit()

            return res.json({
                id: insertedIds[0],
                ...point,
            })

        } catch (err) {
            console.log(err)
            await t1.rollback()
            return res.json({ error: err })
        }
    }

    async show(req: Request, res: Response) {
        const { id } = req.params

        const point = await knex('points').where('id', id).first()

        if (!point) {
            return res.status(400).json({ error: 'Point not found' })
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title')

        const serializedPoint = {
            ...point,
            image_url: `http://192.168.0.5:3333/uploads/${point.image}`
        }


        return res.json({ serializedPoint, items })
    }

    async index(req: Request, res: Response) {
        const { city, uf, items } = req.query

        const parsedItems = String(items).split(',').map(item => Number(item.trim()))

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*')

        const serializedPoints = points.map(point => {
            return {
                ...point,
                image_url: `http://192.168.0.5:3333/uploads/${point.image}`
            }
        })

        return res.json(serializedPoints)
    }
}

export default PointsController