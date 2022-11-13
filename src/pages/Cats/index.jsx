import useFetch from "../../hooks/use-fetch";
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
export default function Cats() {
  const getCatBreedsUrl = 'https://api.thecatapi.com/v1/breeds'
  const [selectedCat,setSelectedCat] = useState(null)
  const [breedsList, breedsListErr, breedsListLoading] = useFetch(getCatBreedsUrl);
  const navigate = useNavigate()
  if (breedsListLoading) return <div> loading </div>;
  if (breedsListErr) return <div> error </div>;
  
  function handleClick(e) {
    e.preventDefault()
    navigate(`/cats/${selectedCat}`)
  }

  return (
    <div>
            <select defaultValue={'Select a cat'} onChange={e => setSelectedCat(e.target.value)} >
            <option disabled>Select a cat</option>
      {breedsList.map((ele,idx) => {
          return (
            <option key={ele.id} value={ele.id}> {ele.name} 
            </option>
            )
      })}
            </select>
            <button onClick={handleClick} >Go to picture</button>
    </div>
  );

}