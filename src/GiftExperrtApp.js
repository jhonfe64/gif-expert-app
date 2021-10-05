import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GiftGrid from './components/GiftGrid';

function GiftExperrtApp() {

    const [categories, setCategory] = useState(['one Punch'])

    return (
        <div>
            <h2>Gift expert app</h2>
            <AddCategory setCategory={setCategory} />
            <hr/>
           
            
            <ol>
                {
                    categories.map((category) => {
                        return  <GiftGrid key={category} categories={category} />
                    })
                }
            </ol>
        </div>
    )
}

export default GiftExperrtApp
