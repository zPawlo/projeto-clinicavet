import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "10px", background: "#ddd" }}>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/comentarios">Comentários</Link>
      </nav>
    </header>
  );
}

export default Header;