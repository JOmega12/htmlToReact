import React from "react";
import Card from "./Card";
import "../characterCards.css";

class CharacterCards extends React.Component {
  render() {
    const { characters } = this.props;

    const mapChar = characters.filter((item) => item.name);
    console.log(mapChar, "mapChar");
    const sortedChar = mapChar.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log(sortedChar, "sorted characters");
    return (
      <>
        <section id="character-cards">
          {sortedChar.map((item, index) => {
            return (
              <Card item={item} key={index} />
            );
          })}
        </section>
      </>
    );
  }
}

export default CharacterCards;
