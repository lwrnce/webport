import './Nav.css';

function Nav() {
  return (
      <div className="nav">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
      </div>
  );
}

export default Nav;