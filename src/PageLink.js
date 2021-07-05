export default function PageLink(props) {
  return (
    <>
      {props.page.map((page) => (
        <header key={page._id.$oid}>
          <h1>{page.title}</h1>
          <p>{page.text.substring(0, 53) + "..."}</p>
          <ul className="actions">
            <li>
              <a className="button big" onClick={props.handleFullPage}>
                Read more...
              </a>
            </li>
          </ul>
        </header>
      ))}
    </>
  );
}
