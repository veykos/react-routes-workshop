import useFetch from "../../hooks/use-fetch";
import {Link} from 'react-router-dom'
export default function Cats() {
  const getCatBreedsUrl = 'https://api.thecatapi.com/v1/breeds'
  const [breedsList, breedsListErr, breedsListLoading] = useFetch(getCatBreedsUrl);

  if (breedsListLoading) return <div> loading </div>;
  if (breedsListErr) return <div> error </div>;
  
  console.log(breedsList)

  return (
    <div>
      {breedsList.map((ele,idx) => {
          return (
            <Link key={idx} to={'/cats/' + ele.id}>
              {ele.name} {" "}
            </Link>
            )
      })}
    </div>
  );

}