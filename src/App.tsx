import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { pokemonAction } from "./store/action";
import { ReducersState } from "./store/reducers";

function App() {
  const { loading, pokemon } = useSelector(
    (state: ReducersState) => state.pokemon
  );
  const dispatch = useDispatch();

  const { getNamePokemon } = bindActionCreators(pokemonAction, dispatch);

  useEffect(() => {
    getNamePokemon();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        pokemon?.map((poke, key) => {
          return (
            <h1 key={key} className="text-zinc-100">
              {poke.name}
            </h1>
          );
        })
      )}
    </>
  );
}

export default App;
