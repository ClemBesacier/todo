// import App from '../App';
import List from './List';
import { useState } from 'react';


function Lists() {
    const [lists, setLists] = useState([]);
    const [contentNewLists, setContentNewLists] = useState('');
    
    const renderState = (lists) => {
        return (
            <List name={lists} />
        )
    }

    const handlListsChange = (event) => {
        setContentNewLists(event.target.value);
    }

    const hundlSubmit = () => {
        setLists(() => {
            return [
                ...lists,
                contentNewLists
            ];
        });

        setContentNewLists('');
    }

    return(
        <div className='lists'>
            <div className='headerLists'>
                <h2>Mes listes</h2>
                <div className='addList'>
                    <input type="text" onChange={handlListsChange} value={contentNewLists} placeholder="Ajouter une liste ..."/>
                    <button onClick={hundlSubmit}>➕</button>
                </div>
                {lists.map(renderState)}
            </div>
        </div>
    )
}

export default Lists;