function PageHeader(): JSX.Element {
  return (
    <header>
      <h1>
        <strong>MY FAVOURITE PLACES</strong>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#canada" id="navLink">
              <strong>Canada</strong>
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#budapest" id="navLink">
              <strong>Budapest</strong>
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#wales" id="navLink">
              <strong>Wales</strong>
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#sheffield" id="navLink">
              <strong>Sheffield</strong>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default PageHeader;
