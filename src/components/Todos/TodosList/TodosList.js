import List from "../../../ui/List/List";
import Item from "../../../ui/Item/Item";

import TodoTask from "../TodoTask/TodoTask";

export default function TodosList({
   todos = [],
   todoStatus,
   onDeleteTodoTask,
   onAddTodoTaskInCompleted,
}) {
   const todosListItems = todos.map((todo) => {
      return (
         <Item className="todo__list-item" key={todo.todoTaskID}>
            <TodoTask
               todoTaskID={todo.todoTaskID}
               todoTaskText={todo.todoTaskText}
               todoStatus={todoStatus}
               onDeleteTodoTask={onDeleteTodoTask}
               onAddTodoTaskInCompleted={onAddTodoTaskInCompleted}
            />
         </Item>
      );
   });

   return <List className="todo__list">{todosListItems}</List>;
}
