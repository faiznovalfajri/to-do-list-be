// untuk Pemetaan URL
import { Router } from "express";
import { createTodo, deletedTodo, getTodo, updateTodo } from "./todos.service.js";
import { createUser, deleteUser, getUser, updateUser } from "./user.service.js";

export const routes = Router();

// untuk ambil data, getTodo di ambil dari todos.services
routes.get("/api/get/todos", getTodo)

// untuk tambah data, createTodo di ambil dari todos.services
routes.post("/api/post/todos", createTodo)

// untuk update data, di tambah params = :id untuk mengambil data yang sudah ada
routes.put("/api/put/todos/:id", updateTodo)

// untuk hapus data, di tambah params = :id
routes.delete("/api/delete/todos/:id", deletedTodo)

// untuk ambil data user
routes.get("/api/get/user", getUser)

// untuk tambah data user
routes.post("/api/post/user", createUser)

// untuk hapus data user
routes.delete("/api/delete/user/:id", deleteUser)

// untuk ubah data user
routes.put("/api/put/user/:id", updateUser)