import { Link } from "react-router-dom";

export default function SearchResult(props) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {props.posts.map((result, index) => (
            <tr key={index}>
              <td>{result.author}</td>
              <td>{result.title}</td>
              <td>{result.resume}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="actions">
        <li>
          <Link to="/">Back To Home Page</Link>
        </li>
      </ul>
    </div>
  );
}
