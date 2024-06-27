import { useState } from "react"


export const AddCategory = ({onNewValue}) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInput = (event) => {
        setInputValue(event.target.value);
    };

    const onPresionaEnter = (event) => {
        event.preventDefault();
        onNewValue(inputValue);
        setInputValue('');
    }

  return (
    <form onSubmit={ onPresionaEnter }>
        <input 
            type="text"
            placeholder="Buscar GIF"
            onChange={ onChangeInput }
            value={inputValue}
        />
    </form>
  )
}
