import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import AddTask from "../../Buttons/AddTask/AddTask";
import TodoInput from "../TodoInput/TodoInput";
import TodosList from "../TodosList/TodosList";
import TodoStatus from "../TodoStatus/TodoStatus";

import Box from "../../../ui/Box/Box";
import Heading from "../../../ui/Heading/Heading";

import todoAddButtonIcon from "../../../assets/icons/add.svg";

import "./Todo.scss";

export default function Todo() {
   const [inputText, setInputText] = useState("");
   const [todos, setTodos] = useState([]);
   const [todoStatus, setTodoStatus] = useState("In Progress");

   const inputTextRef = useRef("");

   const handleChangeInputText = (event) => {
      setInputText(event.target.value);
   };

   const handleAddTodoTask = (todo) => {
      setTodos((prevState) => {
         return [
            ...prevState,
            {
               todoTaskID: uuidv4(),
               todoTaskText: todo,
               todoTaskCompleted: false,
            },
         ];
      });

      setInputText("");
      inputTextRef.current.value = "";
   };

   const handleDeleteTodoTask = (todoTaskID) => {
      setTodos((prevState) => {
         const existingTodoTaskIndex = prevState.findIndex((todo) => {
            return todo.todoTaskID === todoTaskID;
         });

         if (existingTodoTaskIndex !== -1) {
            const updatedTodoTasks = [...prevState];
            updatedTodoTasks.splice(existingTodoTaskIndex, 1);

            return updatedTodoTasks;
         }

         return prevState;
      });
   };

   const handleToggleTodoStatus = (event) => {
      setTodoStatus(event.target.innerText);
   };

   const handleAddTodoTaskInCompleted = (todoTaskID) => {
      setTodos((prevState) => {
         const existingTodoTaskIndex = prevState.findIndex(
            (todo) => todo.todoTaskID === todoTaskID
         );

         if (existingTodoTaskIndex !== -1) {
            const updatedTodoTasks = [...prevState];
            updatedTodoTasks[existingTodoTaskIndex].todoTaskCompleted = true;

            return updatedTodoTasks;
         }

         return prevState;
      });
   };

   const visibilityAddTaskButton = inputTextRef.current.value ? (
      <AddTask className="todo__add-btn" onClick={() => handleAddTodoTask(inputText)}>
         <img src={todoAddButtonIcon} alt="Add Task" />
      </AddTask>
   ) : (
      false
   );

   const filteredTodoTasks =
      todoStatus === "In Progress"
         ? todos.filter((todo) => !todo.todoTaskCompleted)
         : todos.filter((todo) => todo.todoTaskCompleted);

   return (
      <Box className="todo">
         <Heading className="todo__title" level={1} text="Get Things Done!" />
         <Box className="todo__input-box">
            <TodoInput
               className="todo__input"
               placeholder="What is the task today?"
               onChange={handleChangeInputText}
               value={inputText}
               ref={inputTextRef}
            />
            {visibilityAddTaskButton}
         </Box>
         <TodoStatus onToggleTodoStatus={handleToggleTodoStatus} />
         <TodosList
            todos={filteredTodoTasks}
            todoStatus={todoStatus}
            onDeleteTodoTask={handleDeleteTodoTask}
            onAddTodoTaskInCompleted={handleAddTodoTaskInCompleted}
         />
      </Box>
   );
}
