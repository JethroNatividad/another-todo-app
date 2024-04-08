import db from "@/lib/db";
import { Todo, columns } from "./columns";
import { DataTable } from "./data-table";

const getTodos = async () => {
  const result = await db.collection("todos").getList<Todo>(1, 30);
  return result;
};

const TodosPage = async () => {
  const todos = await getTodos();
  return (
    <div>
      <DataTable columns={columns} data={todos.items} />
    </div>
  );
};

export default TodosPage;
