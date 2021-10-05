import React, {useState} from 'react';
import PropTypes from 'prop-types';

function AddCategory({setCategory}) {

    const [inputValue, setInputValue] = useState('');

    const hadleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        

        e.preventDefault();
        //como prop el padre le pasó la prop al hijo setCategory que se encarga de actualizar el estado del padre que es un array de categorias, (es una función) se puede enviar del padre   <AddCategory setCategory={setCategory} /categories={categories}> ose enviar el estado inicial categories 

        //Aqui para actualizar el padre usamos la función que actualiza ele stadod el padre que es una prop, setCategory, la otra prop categories que es una rray la desestructuramos y enviamso todos sus elementos ...categories, mas el valor del input


        // setCategory([...categories, inputValue]);
        // setInputValue('');

        //Ahora Tambien podemos no enviar si no la funcion actualizadora, y esa funcion actualizadora ejecutaria otra función, un callback que tendria un parámetro, ese parámetro sería el estado del componente padre y se podria actualizar normalmente comos e hizo arribas

        inputValue.trim() !== '' && 
        setCategory((categories)=>([inputValue, ...categories]))
        setInputValue('');
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value = {inputValue}
                    onChange={hadleInputChange}
                />
            </form>
        </div>
    )
}

//La props debbe llegar y ser una función

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired,
}

export default AddCategory
