import db from "@/lib/db";

type Todo = {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  created: string;
  updated: string;
};

const getTodos = async () => {
  const result = await db.collection("todos").getList<Todo>(1, 30);
  return result;
};

const TodosPage = async () => {
  const todos = await getTodos();
  return (
    <div>
      {todos.items.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodosPage;
