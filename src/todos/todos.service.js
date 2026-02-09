import { request, response } from "express";
import db from "../conn.js";
import res from "express/lib/response.js";

export async function getTodo(req = request, res = response) {
    try {
        const data = await db.todo.findMany();
        return res.status(200).json({
            message: "success get data todos", data
        })
    } catch (error) {
        return res.status(500).json({
            message: "invalid get data todos", error
        })
    }
}

// untuk hapus data
export const deletedTodo = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const intId = parseInt(id);

        // buat validasi, jika id tidak di temukan maka akan menampilkan pesan
        if (!id) return res.status(401).json({
            message: "id is not defined"
        })

        const result = await db.todo.delete({
            where: {
                // id : req.params.id 
                id: intId
            }
        });

        return res.status(200).json({
            message: "deleted success", result
        })

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: error.message
        })
    }
}
// untuk membuat data baru
export const createTodo = async (req = request = res = response) => {
    try {
        const { name_todo, status = false, price } = req.body;

        //buat validasi
        if (!name_todo && !price) {
            return res.status(401).json({
                message: "input required"
            })
        }

        // untuk menghubungkan ke database
        const result = await db.todo.create({
            data: {
                name_todo, status, price
            }
        })

        return res.status(200).json({
            message: "created success", result
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

// untuk update data
export const updateTodo = async () => {
    try {
        const { name_todo, status = false, price } = req.body;
        // untuk mengetahui data mana yang akan di ambil / untuk perbandingan jika id sama maka akan di ambil
        const { id } = req.params;

        //buat validasi
        if (!name_todo && !price) {
            return res.status(401).json({
                message: "input required"
            })
        }

        // untuk menghubungkan ke database
        const result = await db.todo.update({
            // untuk mencari id yang ada di database
            where: {
                id: id
            },
            data: {
                name_todo, status, price
            }

        })

        return res.status(200).json({
            message: "update success", result
        })


    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}