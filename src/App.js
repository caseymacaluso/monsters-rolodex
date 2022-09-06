import { Component } from "react";

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
    console.log("constructor");
  }

  // Lifecycle method
  // Fetches data the moment the App component is 'mounted' on the DOM, i.e. rendered
  // Runs after the render() method
  componentDidMount() {
    console.log("componentDidMount");
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

  render() {
    // render runs after the constructor
    console.log("render");

    // Pulling state variables & functions from 'this';
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // Filters the monsters array to match the string input in the search input field
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <input
          className="search"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {filteredMonsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
