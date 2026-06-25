import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

function TodoList() {
  const [todo, setTodo] = useState<Todo>({
    id: 1,
    text: 'Learn useState',
    done: false,
  });


  console.log(todo)
  
  const [items, setItems] = useState<string[]>(['React', 'TypeScript']);

  const toggleTodo = () => {
    setTodo(prev => ({
      ...prev,
      done: !prev.done,
    }));
  };

  const addItem = () => {
    setItems(prev => [...prev, 'New item']);
  };

  return (
    <div>
      <button onClick={toggleTodo} className="border rounded-md p-1">Toggle Todo</button>
      <button onClick={addItem} className="border rounded-md p-1">Add Item</button>
    </div>
  );
}

export default TodoList