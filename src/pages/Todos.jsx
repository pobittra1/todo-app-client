import Container from "@/components/ui/Container";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { TodoModal } from "./todo/TodoModal";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      _id: "1",
      todo: "todo-1",
      priority: "high",
      isCompleted: true,
      __v: 0,
    },
    {
      _id: "2",
      todo: "todo-2",
      priority: "medium",
      isCompleted: false,
      __v: 0,
    },
    {
      _id: "3",
      todo: "todo-3",
      priority: "low",
      isCompleted: true,
      __v: 0,
    },
  ]);
  return (
    <Container>
      <div className="flex justify-between mt-32">
        <div className="flex items-center gap-3">
          <SearchIcon></SearchIcon>
          <Input placeholder="search"></Input>
        </div>
        <div>
          <TodoModal></TodoModal>
        </div>
      </div>
      <div className="border-b border-gray-400 my-5" />
      <div className="space-y-3">
        {todos.map((item) => (
          <div
            key={item._id}
            className="border border-gray-400 px-3 py-2 rounded flex items-center"
          >
            <Checkbox className="me-2"></Checkbox>
            <p className="font-semibold capitalize">{item.todo}</p>
            <div className="bg-red-500 size-4 rounded-full ml-auto"></div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Todos;
