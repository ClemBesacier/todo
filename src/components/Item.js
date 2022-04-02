// Importe juste usestate de react
import { useState } from 'react'; 
import App from '../App';

function Item(props) {
    // on instancie usestate
    // on récupère un tableau (mon state lui même) et une fonction qui mettre à jour mon stage
    const [done, setDone] = useState(false);
    const [deleteItem, setDeleteItem] = useState(false);

    const handlClick = () => {
        setDone(!done);
    };

    const handlDelete = () => {
        setDeleteItem(!deleteItem);
    }

    if(!deleteItem) {
        return (
            <section className='itemToDo'>
                <p onClick={handlClick} className={done ? "checked" : "notChecked"}>{props.label}</p>
                <div onClick={handlDelete} className='deletePicto'>🗑</div>
            </section>
        )
    } else {
        
    }

}

export default Item;