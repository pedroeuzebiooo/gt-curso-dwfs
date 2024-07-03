import "./header.css";

export function Header() {
  return (
    <header>
      <nav className="max-width">
        <a href="/" id="logo">
          Logo
        </a>

        <ul>
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
