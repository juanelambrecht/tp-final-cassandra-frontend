export default function PageFullText(props) {
  return (
    <>
      {props.page.map((page) => (
        <section key={page._id.$oid}>
          <header className="main">
            <h1>{page.title}</h1>

            <p>{page.text}</p>
          </header>
          <p>By {page.author}</p>
          <ul className="actions">
            <li>
              <a className="button big" onClick={props.handleFullPage}>
                Main Page
              </a>
            </li>
          </ul>
        </section>
      ))}
    </>
  );
}
