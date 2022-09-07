// import { /* Component, */ } from "react";
import "./search-box.styles.css";

// FUNCTION-BASED APPROACH
const SearchBox = props => {
  const { className, placeholder, onChangeHandler } = props;
  return (
    <input
      className={`${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

// CLASS-BASED APPROACH
// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
