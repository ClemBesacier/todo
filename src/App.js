import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SubHeader from './SubHeader';
import Item from './Item';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(['Faire les courses', 'Mettre de l\'essence', 'Mettre mon réveil', 'Mettre à miam au chat', 'Faire le ménage']);
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

  // .map : itère dans le tableau et à chaqud itération je rend un composant Item
  return (
    <div className="App">
      <header className="App-header">
        <SubHeader />
        <Header />
      </header>
      <section className="items">
        <input type="text" onChange={handlInputChange} value={contentNew}/>
        <button onClick={hundlSubmit}>➕</button>
        {items.map(renderState)}
      </section>
    </div>
  );
}

export default App;
