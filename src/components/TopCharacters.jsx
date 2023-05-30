import "../characterRatings.css";

function TopCharacters({ characters }) {
  const sortedCharacters = characters.sort((a, b) => b.votes - a.votes);
  const top5Char = sortedCharacters.slice(0, 5);
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
            console.log(char, "char");
            return (
              <tr className={index % 2 === 0 ? "dark" : "light"} key={index}>
                <td>{char.name}</td>
                <td>{char.skillset.join(", ")}</td>
                <td>{char.votes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
export default TopCharacters;
