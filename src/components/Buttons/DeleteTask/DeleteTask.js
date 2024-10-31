import Button from "../../../ui/Button/Button";

export default function DeleteTask({
   className,
   type = "button",
   onClick = null,
   text = "",
   children,
}) {
   return (
      <Button className={className} type={type} onClick={onClick} text={text} children={children} />
   );
}
