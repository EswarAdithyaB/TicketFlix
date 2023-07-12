import "./movie.css";

export default function Movie({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
              Romantic
          </span>
          <span className="postCat">
              Action
          </span>
        </div>
        <div className="postTitle">
            <h1>Adipurush</h1>
            <button>Book Now</button>
        </div>
        <hr />
        <div className="languages">
        <span className="language">
            Hindi
        </span>
        
        <span className="language">
            Telugu
        </span>
        </div>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}