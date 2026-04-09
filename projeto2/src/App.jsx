import { useState } from 'react';
import './App.css'

function MyButton({count, onClick}){
  

  return(
    <button className='botao' onClick={onClick}>Eu sou um botao Clicado {count} vezes</button>
  );
}

function SobrePagina(){
  return(
    <div>
      <h2 className='sobre'>Sobre</h2>
      <p>Olá. <br/>Como vai?</p>
    </div>
  );
}

const user = {
name: 'William',
imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
imageSize: 90,
};

function Profile(){
  return(
    <>
    <h1>{user.name}</h1>
    <img
    className='avatar'
    src={user.imageUrl}
    alt={'Foto de' + user.name}
    style={{
      width: user.imageSize,
      height: user.imageSize
    }}
    />
    </>
  );
}

const products = [
{title: 'Repolho', isFruit: false, id: 1},
{title: 'Alho', isFruit: false, id:2},
{title: 'Maçã', isFruit: true, id:3}
]
function ShoppingList(){

const listItems = products.map(product =>
<li key={product.id}
style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
{product.title}
</li>
);

return(
<ul>{listItems}</ul>
);
}


function App() {

const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count + 1);
    //alert('Você clicou no botão!');
    
  }

  const [clique, setClique] = useState(0);
  function toClicando(){
    setClique(clique + 2);
  }

  
  return (
   <div>
    <h1>Bem Vindo!</h1>
    <SobrePagina/>
    <MyButton count={count} onClick={handleClick}/>
    <MyButton count={clique} onClick={toClicando}/>
    <Profile/>
    <ShoppingList/>
   </div>
   
  )
}

export default App
