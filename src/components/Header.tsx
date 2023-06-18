import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Eyo Devlog</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/About"}>About</Link>
    </header>
  );
}
