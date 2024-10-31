import Box from "../../../ui/Box/Box";
import Text from "../../../ui/Text/Text";
import Button from "../../../ui/Button/Button";
import Image from "../../../ui/Image/Image";

import DeleteTask from "../../Buttons/DeleteTask/DeleteTask";

import deleteButtonIcon from "../../../assets/icons/delete.svg";
import todoInProgressIcon from "../../../assets/icons/task-in-progress.svg";
import todoCompletedIcon from "../../../assets/icons/task-completed.svg";

export default function TodoTask({
   todoTaskID,
   todoTaskText,
   todoStatus,
   onDeleteTodoTask,
   onAddTodoTaskInCompleted,
}) {
   const isCompletedTodoTask = todoStatus === "Completed" ? todoCompletedIcon : todoInProgressIcon;

   return (
      <Box className="todo__task">
         <Button className="todo__task-complete-btn">
            <Image
               src={isCompletedTodoTask}
               alt="Complete Task"
               onClick={() => onAddTodoTaskInCompleted(todoTaskID)}
            />
         </Button>
         <Text className="todo__task-text" text={`${todoTaskText} (${todoStatus})`} />
         <Box className="todo__task-actions">
            <DeleteTask
               className="todo__task-delete-btn"
               onClick={() => onDeleteTodoTask(todoTaskID)}
            >
               <Image src={deleteButtonIcon} alt="Delete Task" />
            </DeleteTask>
         </Box>
      </Box>
   );
}
