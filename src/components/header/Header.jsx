import coverImage from '../../assets/cover-image.jpg';

export default function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <h1>Alison Colao</h1>
      <img src={coverImage} alt="writing"></img>
      {props.children}
    </header>
  );
}
