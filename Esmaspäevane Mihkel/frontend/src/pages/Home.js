import ItemList from '../components/ItemList';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8080/items').then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
      setIsLoading(false);
      setLoadedItems(data);
    });
  },[])

  if(isLoading){
    return(<Loader/>);
  }

    return (
        <>
            <h1>Esemed</h1>
            <section>
                <ItemList isAddToCart={true} items={loadedItems}/>
            </section>
        </>
    )
}

export default Home;