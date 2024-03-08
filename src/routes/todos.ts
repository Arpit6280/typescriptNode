import express, { Router } from "express";

import { Todo } from "../models/todo";

type RequestBody = { text: string };

type RequestParams = { todoId: string };

let todos: Todo[] = [];
const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };
  todos.push(newTodo);
  return res
    .status(200)
    .json({ message: "Added todo", todos: todos, newTodo: newTodo });
});

router.put("/todo/:todoId", (req, res, next) => {
  const params = req.params;
  const tid = params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === tid);
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
    return res.status(200).json({ message: "updated todo", todos: todos });
  }
  res.status(404).json({ message: "not found" });
});

router.delete("/todo/:todoId", (req, res, next) => {
  let todoId: any = req.params.todoId;
  todos.filter((todo) => todo.id === todoId);
  return res.status(200).json({ message: "deleted todo", todos: todos });
});

export default router;
