export default function Button({
   className,
   type = "button",
   onClick = null,
   text = "",
   children,
}) {
   return (
      <button className={className} type={type} onClick={onClick}>
         {text ? text : children}
      </button>
   );
}
