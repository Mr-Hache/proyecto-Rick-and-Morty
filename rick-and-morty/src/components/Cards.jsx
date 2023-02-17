import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {

            characters.map((character, index) => {
               return <Card name={character.name} species={character.species} gender={character.gender} image={character.image} onClose={() => alert("se cierra la carta")} key={index}/>
            })
         }
      </div>)

}
