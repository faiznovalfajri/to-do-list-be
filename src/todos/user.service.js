import { request, response } from "express";
import db from "../conn.js";

// untuk menyimpan logic yang di simpan di dalam function
export const getUser = async (req = request, res = response) => {
    // gunakan try catch untuk penangan error otomatis
    try {
        const data = await db.user.findMany();
        return res.status(200).json({
            message: "success get data user", data
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

// untuk membuat data
export const createUser = async (req = request, res = response) => {
    try {
        const { name, address } = await req.body

        // untuk validasi
        if (!name && !address) {
            return res.status(401).json({
                message: "input tidak boleh kosong"
            })
        }

        // untuk menghubungkan ke database
        const result = await db.user.create({
            data: {
                name, address
            }
        })

        return res.status(200).json({
            message: "data berhasil di tambahkan", result
        })


    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

// untuk meghapus data
export const deleteUser = async (req = request, res = response) => {
    try {
        // params = url
        const id = req.params.id

        // buat validasi
        if (!id) return res.status(401).json({
            message: "id is not defined"
        })

        // untuk menghubungkan ke database
        const result = await db.user.delete({
            where: {
                // id : req.params.id 
                id: id
            }
        })

        return res.status(200).json({
            message: "data berhasil dihapus", result
        })


    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

// untuk megubah data
export const updateUser = async (req = request, res = response) => {
    try {
        const { name, address } = req.body
        // untuk mengetahui data mana yang akan di ambil / untuk perbandingan jika id sama maka akan di ambil
        const { id } = req.params

        // untuk validasi
        if (!name && !address) {
            return res.status(401).json({
                message: "input required"
            })
        }

        // untuk menghubungkan ke database
        const result = await db.user.update({
            where: {
                id: id
            },
            data: {
                name, address
            }
        })
        
        return res.status(200).json({
            message: "update berhasil", result
        })


    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}