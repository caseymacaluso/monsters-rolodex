// import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

// FUNCTION-BASED APPROACH
const CardList = props => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map(monster => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

// CLASS-BASED APPROACH
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map(monster => {
//           return <Card monster={monster} key={monster.id} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
