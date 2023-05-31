import "../characterCards.css";
function Card({ item, key }) {
  return (
    <div className="card" key={key}>
      <div className="card-titles">
        <h3>{item.name}</h3>
        <h4>{item.nickName}</h4>
      </div>
      <img src={item.imageUrl} alt={item.name} />
      <p>{item.background}</p>
    </div>
  );
}

export default Card;
