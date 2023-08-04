import coverImage from '../../assets/cover/dream.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Alison Colao</h1>
      <img src={coverImage} alt="Dreamy Clouds"></img>
      {props.children}
    </header>
  );
}

export default Header;
