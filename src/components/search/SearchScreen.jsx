import React, { useState, useMemo } from "react";
import queryString from "query-string";
import HeroCard from "../heroes/HeroCard";
import { useHistory, useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";

const SearchScreen = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  console.log(q);
  let history = useHistory();
  const [busqueda, setBusqueda] = useState(q);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${busqueda}`);
  };
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              onChange={(e) => setBusqueda(e.target.value)}
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4> Results </h4>
          <hr />
          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">There's not a Hero, please try it again</div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
