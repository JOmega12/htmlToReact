import '../characterRatings.css'

function TopCharacters({characters}) {

  // console.log(characters, 'characters prop Top Characters');

  const sortedCharacters = characters.sort(((a, b) => b.votes - a.votes));
  console.log(sortedCharacters);
  const top5Char = sortedCharacters.slice(0, 5);
  console.log(top5Char);


  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        {top5Char.map((char, index) => {
          console.log(char, 'char');
          return(
            <tr className= {index % 2 === 0 ? 'light': 'dark'} 
            key = {index}
            >
              <td>{char.name}</td>
              <td>{char.skillset.join(', ')}</td>
              <td>{char.votes}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </section>
  );
}


        {/* <tr className="dark">
          <td>Alfonse Elrich</td>
          <td>Being Loveable, Alchemy</td>
          <td>110</td>
        </tr>
        <tr className="light">
          <td>Edward Elrich 'Full Metal Alchemist'</td>
          <td>Alchemy, Human Transmutation</td>
          <td>100</td>
        </tr>
        <tr className="dark">
          <td>Hawkeye</td>
          <td>Sniper, Loyal AF</td>
          <td>95</td>
        </tr>
        <tr className="light">
          <td>Mj. Armstrong</td>
          <td>Alchemy, Muscles</td>
          <td>94</td>
        </tr>
        <tr className="dark">
          <td>Nina</td>
          <td>Loving Dogs, being adorable</td>
          <td>93</td>
        </tr> */}
export default TopCharacters;
