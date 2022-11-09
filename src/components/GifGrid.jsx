
import { GifItem } from "./GifItem";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

//useEeffect es un hook que se usa para disparar efectos secundarios

export const GifGrid = ({ category }) => {
//esto va a ser un custom hook

    const { images, isLoading} = useFetchGifs( category );




    /*const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages)
    }

      useEffect( () => {
        getImages();

    }, [])*/ //si el corchete esta vacio significa que esto solo se ejecuta la primera vez que se construye el componente. Esto lo ha hecho para que no se vuelta a ejecutar todo al añadir algo

    
   
 // no se puede usar class en el div de abajo porque en javascript class es una palabra reservada para las clases de javascript

  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && (<h2>Cargando...</h2>)  // si el isLoading es true muestra eso
        }
        
        
        <div className="card-grid"> 
            {
                images.map( ( image ) => (
                    <GifItem 
                    key={image.id}
                    title={ image.title }
                    url= {image.url }
                     />
                ))  //el profe en lugar de hacer lo de arriba hizo (debajo de key) { ...image}, para tener acceso a todas las propiedades 
            }
        </div>
    
    </>
  )
}
