import Movie from "./movie";
import "./movies.css";
export default function Movies({data}) {
  return (
    <>
    <div className="posts">
      {data.map((d) =>(
      <Movie movie={d} />
    ))}
      </div>
    </>
  );
}