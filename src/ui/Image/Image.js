export default function Image({ src, alt, onClick = null }) {
   return <img src={src} alt={alt} onClick={onClick} />;
}
