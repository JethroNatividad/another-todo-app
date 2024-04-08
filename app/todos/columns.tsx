"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Todo = {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  created: string;
  updated: string;
};

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "content",
    header: "Content",
  },
  {
    accessorKey: "completed",
    header: "Completed",
    cell: ({ row }) => {
      return row.original.completed ? "Yes" : "No";
    },
  },
];
