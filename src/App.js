import "./App.css";
import BasicTable from "./Components/BasicTable";
import SortingTable from "./Components/SortingTable/SortingTable";
import FilteringTable from './Components/Filter/FilteringTable'
import PaginationTable from './Components/Pagination/PaginationTable'

function App() {
  return <div className="App">
    {/* <BasicTable></BasicTable> */}
    {/* <SortingTable></SortingTable> */}
    {/* <FilteringTable></FilteringTable> */}
    <PaginationTable></PaginationTable>
  </div>;
}

export default App;
