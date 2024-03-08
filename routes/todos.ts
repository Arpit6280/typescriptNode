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
  return res.status(200).json({ todos: todos });
});

router.put("/todo/:todoId", (req, res, next) => {
  const tid = req.params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === tid);
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
    return res.status(200).json({ message: "updated todo", todos: todos });
  }
  res.status(404).json({ message: "not found" });
});

router.delete("/todo/delete", (req, res, next) => {
  let id: any = req.body.id;
  let index: number = todos.findIndex((todo) => todo.id === id);
  todos.slice(index, index + 1);
  return res.status(200).json({ message: "deleted todo" });
});

export default router;
