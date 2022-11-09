import { useState} from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch']);

const onAddCategory = (newCategory) => {
    
    if (categories.includes(newCategory)) return;

    setCategories([ newCategory, ...categories ])
}

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value)}
            />

           
            
                { categories.map( (category) =>  ( //iria un return pero lo borra para simplificar
                        <GifGrid 
                            key={ category } 
                            category={ category }/>
                    )) 
                }
            
               
        </>
    )
}