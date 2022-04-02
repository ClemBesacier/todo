// Importe juste usestate de react
import { useState } from 'react'; 

function Item(props) {
    // on instancie usestate
    // on récupère un tableau (mon state lui même) et une fonction qui mettre à jour mon stage
    const [done, setDone] = useState(false);
 
    const handlClick = () => {
        setDone(!done);
    };

    return (
        <section className='itemToDo'>
            <p onClick={handlClick} className={done ? "checked" : "notChecked"}>{props.label}</p>
            <div className='deletePicto'>🗑</div>
        </section>
    )
}

export default Item;