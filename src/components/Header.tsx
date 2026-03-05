function Header() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      background: "#ffffff",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      zIndex: 1000
    }}>
      <a href="#home">Home</a>
      <a href="#about">Sobre</a>
      <a href="#contact">Contato</a>
    </nav>
  );
}

export default Header;