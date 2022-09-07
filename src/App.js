import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // runs when component is initialized (first in the cycle)
  constructor() {
    super(); // calls constructor() method of any other classes the component is extending from (in this case, Component)
    // initializes state
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // Lifecycle method
  // Fetches data the moment the App component is 'mounted' on the DOM, i.e. rendered
  // Runs after the render() method
  componentDidMount() {
    // API call, parses to JSON, then sets the value of monsters to the parsed information
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  // Handler to handle changes in the search field
  onSearchChange = evt => {
    const searchField = evt.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  // render runs after the constructor
  render() {
    // Pulling state variables & functions from 'this';
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // Filters the monsters array to match the string input in the search input field
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

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
  }
}

export default App;
