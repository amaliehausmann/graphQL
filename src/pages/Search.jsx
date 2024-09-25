import { useParams } from "react-router-dom";


export const Search = () => {
  const { filmID } = useParams();

  return (
    <div>
        <p>Search</p>
    </div>
  )
};
