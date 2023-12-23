const Navbar = () => {
  return (
    <nav
      id="navbar-top"
      className="navbar navbar-expand-sm navbar-dark sticky-top  "
      style={{ color: "#0583d2", backgroundColor: "black" }}
    >
      <a href="/" className="navbar-brand head-name">
        SmritiKarki{" "}
      </a>
      <button
        className="navbar-toggler "
        data-toggle="collapse"
        data-target="#navbarToggler"
      >
        <span className="navbar-toggler-icon"> </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ml-auto" style={{ marginLeft: "auto" }}>
          <li className="nav-item">
            <a className="nav-link" href="#about-me">
              About Me
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact-me">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
