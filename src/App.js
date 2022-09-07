import { /* Component, */ useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

// FUNCTION-BASED IMPLEMENTATION

const App = () => {
  // Using useState hooks to handle state changes
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // useEffect to call API. callback array is empty because we only want to call the API once. Specifying monsters in the array would cause infinite re-renders
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  // useEffect to handle filtering monsters. Otherwise, would fire needlessly when any input changes, when we only care about the original monsters array and the actual search term we're filtering on
  useEffect(() => {
    // Filter monsters array on current search term
    setFilteredMonsters(
      monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase());
      })
    );
  }, [monsters, searchField]);

  // Handler to handle search field input changes
  const onSearchChange = evt => {
    const searchFieldString = evt.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// CLASS-BASED IMPLEMENTATION

// class App extends Component {
//   // runs when component is initialized (first in the cycle)
//   constructor() {
//     super(); // calls constructor() method of any other classes the component is extending from (in this case, Component)
//     // initializes state
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   // Lifecycle method
//   // Fetches data the moment the App component is 'mounted' on the DOM, i.e. rendered
//   // Runs after the render() method
//   componentDidMount() {
//     // API call, parses to JSON, then sets the value of monsters to the parsed information
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(users =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   // Handler to handle changes in the search field
//   onSearchChange = evt => {
//     const searchField = evt.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   // render runs after the constructor
//   render() {
//     // Pulling state variables & functions from 'this';
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     // Filters the monsters array to match the string input in the search input field
//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLowerCase().includes(searchField.toLowerCase());
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
