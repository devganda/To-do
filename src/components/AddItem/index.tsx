import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type props = {
    //type function que não retorna nada
    onEnter: ( taskName: string) => void;
}

const AddItem = ({onEnter}: props)=>{
    const [inputText, SetInputText] = useState('');
    const handleKeyUp = (e:KeyboardEvent)=>{
        // se code foi igual a Enter e campo input for diferente de vazio, vai adicionar o texto na função que implementa o valor no novo array de list depois limpa o campo input
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            SetInputText('');
        }
    }
    return(
        <C.ContainerAdd>
            <div className="image">➕</div>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={e => SetInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.ContainerAdd>
    );
};

export default AddItem;