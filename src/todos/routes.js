// untuk Pemetaan URL
import { Router } from "express";
import { createTodo, deletedTodo, getTodo, updateTodo } from "./todos.service.js";

export const routes = Router();

// untuk ambil data, getTodo di ambil dari todos.services
routes.get("/api/get/todos", getTodo)

// untuk tambah data, createTodo di ambil dari todos.services
routes.post("/api/post/todos", createTodo)

// untuk update data, di tambah params = :id untuk mengambil data yang sudah ada
routes.put("/api/put/todos/:id", updateTodo)

// untuk hapus data, di tambah params = :id
routes.delete("/api/delete/todos/:id", deletedTodo)