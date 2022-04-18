import { useState } from 'react'; 
import Item from './Item';
import Header from './Header';
// import SubHeader from './SubHeader';
// import App from '../App';
// import Lists from './Lists';
import '../List.scss';


function List(props) {
    // const [newContentList, setNewContentList] = useState('');
    const [done, setDone] = useState(false);
    const [items, setItems] = useState([]);
    const [contentNew, setContentNew] = useState('');

    // récupère les éléments du tableau
    const renderState = (item) => {
        return (
            <Item label={item} />
        )
    }

  // à chaque fois que le contenu de l'input change, on appelle cette fonction qui à l'argument event.target.value
  // event.target.value = texte du nouvel item
    const handlInputChange = (event) => {
        setContentNew(event.target.value);
    }

    const hundlSubmit = () => {
        setItems(() => {
            return [
                ...items,
                contentNew
            ];
        });

        setContentNew('');
    }

    const handlClickOpen = () => {
        setDone(!done);
    }

    return (
        <section className={done ? "eachList open" : "eachList notOpen"}>
            <div className='list' onClick={handlClickOpen}>
                {props.name}
            </div>
            <div className="containerApp">
                <header className="App-header">
                    <Header title={props.name} />
                </header>
                <section className="items">
                    <div className="addItem">
                        <input type="text" onChange={handlInputChange} value={contentNew} placeholder="Ajouter un item ..."/>
                        <button onClick={hundlSubmit}>➕</button>
                    </div>
                    {items.map(renderState)}
                    {/* <Item /> */}
                </section>
            </div>
        </section>
    )
}

export default List;