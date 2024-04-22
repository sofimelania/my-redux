import dataDishes from "../../data/dataDishes";
import { getSelectedCategopry } from "../../redux/dishesSlice";
import Dish from "./Dish";
import {useSelector} from 'react-redux';


const Dishes=()=>{
    const selectedCategory=useSelector(getSelectedCategopry);
    return(<div>
        {dataDishes
        .filter(dish =>{
            if (selectedCategory === 'ALL') return true;
    return selectedCategory === dish.category;
        })
        .map(dish=><Dish dish={dish}/>)}
    </div>)
}
export default Dishes;