import Button from "../../../ui/Button/Button";

export default function AddTask({ className, text, onClick = null, children = null }) {
   return <Button className={className} text={text} onClick={onClick} children={children} />;
}
