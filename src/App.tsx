import { useState } from 'react';
import * as C from './App.styles';
import  {Item} from './types/item';
import ListItem from './components/ListItem/index';
import AddItem from './components/AddItem/index';

const App = () =>{
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Levar o lixo', done:false},
    {id: 2, name: 'Comprar pão', done:true},
  ]);

  const handleAddTask = ( taskName: string)=>{
    //clonando o array List 
    let newList = [...list];
    //Adicionando as novas informações no novo array List
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    //passando o novo array para a função state do List
    setList(newList);
  }

  const handleDonetask = (id: number, done: boolean) =>{
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
          <AddItem onEnter={handleAddTask}/>
          {list.map((item, index) =>(
             <ListItem 
              key={index} 
              item={item} 
              doneTask={handleDonetask}
              />
          ))}
      </C.Area>
    </C.Container>
  );
}

export default App;