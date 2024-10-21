import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { getHeroById, nextHero } from "../helpers";
import { useMemo, useState } from "react";

export const HeroPage = () => {

  const { heroId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  const searchParams = new URLSearchParams(location.search);
  const showNext = searchParams.get("s") === "1" ? true : false;

  const [isHovered, setIsHovered] = useState(false);

  const svgStyle = {
    stroke: "#00abfb",
    fill: "none",
    strokeWidth: isHovered ? "1.8px" : "1.5px",
    transform: isHovered ? "translateY(-5px)" : "translateY(0px)", 
    transition: "all 0.3s ease"
  };

  const buttonStyle = {
    cursor: "pointer",
    display: showNext ? '' : 'none'
  }

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ `/assets/heroes/${heroId}.jpg` } 
          alt={ hero.superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <div className="col-8 d-flex">
          <h3>{ hero.superhero }</h3>
            <Link to={`/hero/${nextHero(heroId)}`}>
                <button className="ms-2 bg-transparent border-0" style={buttonStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle} className="icon icon-tabler  icon-tabler-chevrons-right" width="30" height="30" viewBox="0 0 24 24" stroke="#00abfb" fill="none">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 7l5 5l-5 5" />
                        <path d="M13 7l5 5l-5 5" />
                    </svg>
                </button>
            </Link>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> { hero.alter_ego } </li>
          <li className="list-group-item"> <b>Publisher:</b> { hero.publisher } </li>
          <li className="list-group-item"> <b>First appearance:</b> { hero.first_appearance } </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{ hero.characters }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={onNavigateBack}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
