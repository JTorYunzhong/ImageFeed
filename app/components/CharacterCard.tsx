interface Character {
  id: number;
  name: string;
  image: string;
}

const CharacterCard: React.FC<Character> = ({ name, image }) => {
  return (
    <div className="character-card-container">
      <div>
        <img className="character-card-img" src={image} alt={name} />
      </div>
      <div className="character-card-name">{name}</div>
    </div>
  );
};

export default CharacterCard;
