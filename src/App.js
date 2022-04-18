// import logo from './logo.svg';
import './App.scss';
// import Header from './components/Header';
// import SubHeader from './components/SubHeader';
// import Item from './components/Item';
import Lists from './components/Lists';
// import List from './components/List';
// import { useState } from 'react';

// @TODO : 
// Faire un onglet All, active, complete
// Ajouter un ordre de priorité aux listes
// Créer un tableau de liste qui contiendront des items (tableau de tableau : une liste contient des items)
// Supprimer une liste
// Modifier une liste
// crud : create read update delete

function App() {
    
    // const [items, setItems] = useState(['Faire les courses', 'Mettre de l\'essence', 'Mettre mon réveil', 'Mettre à miam au chat', 'Faire le ménage']);
//     const [items, setItems] = useState([]);
//     const [contentNew, setContentNew] = useState('');

//     // récupère les éléments du tableau
//     const renderState = (item) => {
//         return (
//             <Item label={item} />
//         )
//     }

//   // à chaque fois que le contenu de l'input change, on appelle cette fonction qui à l'argument event.target.value
//   // event.target.value = texte du nouvel item
//     const handlInputChange = (event) => {
//         setContentNew(event.target.value);
//     }

//     const hundlSubmit = () => {
//         setItems(() => {
//             return [
//                 ...items,
//                 contentNew
//             ];
//         });

//         setContentNew('');
//     }

  // .map : itère dans le tableau et à chaqud itération je rend un composant Item
    return (
        <div className="App">
            <Lists />
            {/* <div id="containerApp" className="containerApp">
            
                <header className="App-header">
                    <Header />
                </header>
                <section className="items">
                    <div className="addItem">
                        <input type="text" onChange={handlInputChange} value={contentNew} placeholder="Ajouter un item ..."/>
                        <button onClick={hundlSubmit}>➕</button>
                    </div>
                    {items.map(renderState)}
                </section>
            </div> */}
        </div>
    );
}

export default App;
