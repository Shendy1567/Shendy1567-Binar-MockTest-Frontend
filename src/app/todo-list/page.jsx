"use client";

import React from "react";
import Navbar from "@/components/Navigation/navbar";
import ListTable from "@/components/todo-list/ListTable";

export default function TodoList() {
  return (
    <main>
      <Navbar />
      <ListTable />
    </main>
  );
}
