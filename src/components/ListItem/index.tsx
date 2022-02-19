import * as C from './styles';
import {Item} from '../../types/item';
import { useState } from 'react';

type props = {
    item: Item
    doneTask: (id: number, done:boolean)=> void
}

const ListItem = ({item, doneTask}:props )=>{
    //const [isCheked, SetisCheked] = useState(item.done);

    return(
        <C.ContainerList done={item.done}>
            <label>
                <input 
                    type="checkbox" 
                    checked={item.done}
                    onChange={e => doneTask(item.id, e.target.checked)}    
                />
                {`${item.name}`}
            </label>
        </C.ContainerList>
    );
}

export default ListItem;