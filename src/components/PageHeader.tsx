function PageHeader(): JSX.Element {
  return (
    <header>
      <h1>
        <strong>MY FAVOURITE PLACES</strong>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#canada">
              <strong>Canada</strong>
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#budapest">
              <strong>Budapest</strong>
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#wales">
              <strong>Wales</strong>
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#sheffield">
              <strong>Sheffield</strong>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default PageHeader;
