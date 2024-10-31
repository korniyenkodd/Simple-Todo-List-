export default function Heading({ className, level, text }) {
   const HeadingTag = `h${level}`;
   return <HeadingTag className={className}>{text}</HeadingTag>;
}
