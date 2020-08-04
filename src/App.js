import React from "react";
import Header from "./components/Header";
// import Wrapper from "./components/Wrapper/wrapper";
// import Search from "Search";
// import SkaterTable from "./components/SkaterTable/skaterTable";
// import skatersJSON from "./skaters.json"
// import "./App.css";

function App() {
  // const [skaters, setSkaters] = useState({
  //   all: skatersJSON,
  //   filtered: skatersJSON,
  // });
  // const [sortName, setName] = useState("");

  // const findSkater = (event) => {
  //   const filtered = skaters.all.filter(({ name }) =>
  //     name.includes(event.target.value)
  //   );

  //   setSkaters({ ...skaters, filtered });
  // };
  return(
    <>
      <Header />
    {/* <Search filterSearch={findSkater} />
      <SkaterTable skaters={skaters.filtered} /> */}
    </>
  );
}
export default App;
