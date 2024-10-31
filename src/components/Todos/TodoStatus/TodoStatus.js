import List from "../../../ui/List/List";
import Item from "../../../ui/Item/Item";
import Button from "../../../ui/Button/Button";
import Image from "../../../ui/Image/Image";

import completedPageIcon from "../../../assets/icons/completed.svg";
import inProgressPageIcon from "../../../assets/icons/in-progress.svg";

import "./TodoStatus.scss";

export default function TodoStatus({ onToggleTodoStatus }) {
   return (
      <List className="todo-status">
         <Item className="todo-status__item">
            <Button className="todo-status__btn" onClick={onToggleTodoStatus}>
               In Progress
               <Image src={inProgressPageIcon} alt="" />
            </Button>
         </Item>
         <Item className="todo-status__item">
            <Button className="todo-status__btn" onClick={onToggleTodoStatus}>
               Completed
               <Image src={completedPageIcon} alt="" />
            </Button>
         </Item>
      </List>
   );
}
