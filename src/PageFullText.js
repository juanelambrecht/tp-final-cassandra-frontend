import { Link } from "react-router-dom";

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
              <Link to="/" className="button big">
                Home Page
              </Link>
            </li>
          </ul>
        </section>
      ))}
    </>
  );
}
