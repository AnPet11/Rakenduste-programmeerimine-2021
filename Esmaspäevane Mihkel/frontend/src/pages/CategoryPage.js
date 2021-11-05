import {Link} from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import {useState, useEffect} from 'react';

function CategoryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCategories, setLoadedCategories] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8080/categories').then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
      setIsLoading(false);
      setLoadedCategories(data);
    });
  },[])

  if(isLoading){
    return(<div className="loadingDivInfo">Laeb...</div>);
  }

  return (
      <div>
        <Link to="add-item">
          <button className="goToNewPage"><img className="addLogo" src="add.png" alt="add icon"/> Lisa uus ese</button>
        </Link>
        <h1>Esemed</h1>
        <div className="itemsPageBoxesArea">
          <ItemList items={loadedItems}/>
        </div>
      </div>
  )
}

export default Home;