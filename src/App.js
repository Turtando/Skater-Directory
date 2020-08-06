import React, { useState } from "react";
import Header from "./components/Header/header";
import Wrapper from "./components/Wrapper/wrapper";
import Search from "./components/Search/search";
import SkaterTable from "./components/SkaterTable/skaterTable";
import skatersJSON from "./skaters.json";
import "./App.css";

function App() {
  const [skaters, setSkaters] = useState({
    all: skatersJSON,
    filtered: skatersJSON,
  });
  const [sortName, setName] = useState("");

  const findSkater = event => {
    const filtered = skaters.all.filter(({ name }) =>
      name.toLowerCase().includes(event.target.value.toLowerCase()));

    setSkaters({ ...skaters, filtered });
  };

  const sortByName = () => {

      let sortedNames = skaters.filtered.sort((a , b) =>{
      const nameA = a.name;
      const nameB = b.name;

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      } return comparison
    }) 
    
    if (sortName === "DESC") {
      sortedNames.reverse();
      setName("ASC");
    } else {
      setName("DESC");
    }
    setSkaters({...skaters, sortedNames})
  }

  return (
    <>
      <Header />
      <Wrapper>
      <Search handleSearch={findSkater} />
      <SkaterTable skaters={skaters.filtered} sortByName={sortByName} />
      </Wrapper>
    </>
  );
}
export default App;
