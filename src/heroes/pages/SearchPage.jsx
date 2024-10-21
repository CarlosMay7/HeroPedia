import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const {q = ''} = Object.fromEntries(searchParams.entries());

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0) ? true : false; 
  const showError = (q.length > 0) && heroes.length === 0;

  const {searchText, onInputChange} = useForm({
    searchText: q
  })

  const onSearchSubmit = e => {
    e.preventDefault();

    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label="form">
            <input type="text" placeholder="search a hero" className="form-control" name="searchText" value={searchText} onChange={onInputChange} autoComplete="off"/>
            <button className="btn btn-outline-primary mt-1" type="submit">
              Search
            </button>
          </form>

        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

            <div className="alert alert-primary" style={{display: showSearch ? '' : 'none'}}>
              Search a hero
            </div>

            <div aria-label="alert-danger" className="alert alert-danger" style={{display: showError ? '' : 'none'}}>
              No hero with <b>{q}</b>
            </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} search={0} />
            ))
          }

        </div>        
      </div>

    </>
  )
}
