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
    const renderState = (item, categ) => {
        return (
            <Item label={item} />
        )
    }
    console.log(renderState);

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

    const notChecked = document.getElementsByClassName('notChecked');
    const notCheckedParent = notChecked.parentNode;
    const isChecked = document.getElementsByClassName('checked');
    
    const handlCategAll = () => {
        const allItems = document.getElementById('allItems');
        if(allItems.checked == true) {
            for (var i=0;i<notChecked.length;i+=1){
                notChecked[i].style.display = 'block';
            }
        }
    }

    const handlCategDone = () => {
        const doneItems = document.getElementById('doneItems');
        
        if(doneItems.checked == true) {
            for (var i=0;i<notChecked.length;i+=1){
                notChecked[i].style.display = 'none';
            }
        }
    }

    const handlCategDeleted = () => {
        const deletedItems = document.getElementById('deletedItems');
        if(deletedItems.checked == true) {
            for (var i=0;i<notChecked.length;i+=1){
                notChecked[i].style.display = 'block';
            }
        }
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
                
                <form action="#" className='stateItems'>
                    <input type="radio" id='allItems' onClick={handlCategAll} value="Tous" name="categItems"/>
                    <label for="allItems" className='eachState'>Tous</label>
                    <input type="radio" id='doneItems' onClick={handlCategDone} value="Terminés" name="categItems" />
                    <label for="doneItems" className='eachState'>Terminés</label>
                    {/* <input type="radio" id='deletedItems' onClick={handlCategDeleted} value="Supprimés" name="categItems" />
                    <label for="deletedItems" className='eachState'>Supprimés</label> */}
                </form>
                <section className="items">
                    <div className="addItem">
                        <input type="text" onChange={handlInputChange} value={contentNew} placeholder="Ajouter un item ..."/>
                        <button onClick={hundlSubmit}>➕</button>
                    </div>
                    {/* <Item /> */}
                </section>
                {items.map((item) => {
                    return <Item key={item} label={item} />;
                })}
            </div>
        </section>
    )
}

export default List;