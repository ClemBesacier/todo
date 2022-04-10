// Importe juste usestate de react
import { useState } from 'react'; 
import App from '../App';

function Item(props) {
    // on instancie usestate
    // on récupère un tableau (mon state lui même) et une fonction qui mettre à jour mon stage
    const [done, setDone] = useState(false);
    const [deleteItem, setDeleteItem] = useState(false);
    const [editItem, setEditItem] = useState(false);
    const [newContentInput, setNewContentInput] = useState('');

    const handlClick = () => {
        setDone(!done);
    };

    const handlDelete = () => {
        setDeleteItem(!deleteItem);
    }
    
    const handlEditItem = () => {
        setEditItem(!editItem);
        // console.log(!editItem);
    }

    const handlInputChange = (event) => {
        document.getElementById('inputValue').classList.add('hide');
        document.getElementById('itemChange').classList.add('show');
        setNewContentInput(event.target.value);
    }
    

    if(!deleteItem) {
        return (
            <section className="itemToDo">
                <div className="item">
                    <span onClick={handlClick} className={done ? "checked" : "notChecked"}></span>
                    <p id="inputValue" onClick={handlInputChange}>{props.label}</p>
                    <input type="text" id="itemChange" placeholder="Ton item ..." value={newContentInput} className={editItem ? "onChange" : "notChanging"} />
                </div>
                <div onClick={handlDelete} className='deletePicto'>🗑</div>
            </section>
        )
    } else {
        
    }

}

export default Item;