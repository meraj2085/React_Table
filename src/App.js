import "./App.css";
import BasicTable from "./Components/BasicTable";
import SortingTable from "./Components/SortingTable/SortingTable";
import FilteringTable from './Components/Filter/FilteringTable'

function App() {
  return <div className="App">
    {/* <BasicTable></BasicTable> */}
    {/* <SortingTable></SortingTable> */}
    <FilteringTable></FilteringTable>
  </div>;
}

export default App;
