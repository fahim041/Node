import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = <string>req.body.text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);
  res.json({ message: "ok", createTodo: newTodo });
};
