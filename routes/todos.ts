import express, { Router } from "express";

import { Todo } from "../models/todo";

const todos: Todo[] = [];
const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  res.status(200).json({ todos: todos });
});

router.delete("/todo/delete", (req, res, next) => {
  let id: any = req.body.id;
  let index: number = todos.findIndex((todo) => todo.id === id);
  todos.slice(index, index + 1);
  res.status(200).json({ todos: todos });
});

export default router;
