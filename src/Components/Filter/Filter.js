import { useSelector}  from 'react-redux';
import { filterCategory, getSelectedCategopry } from '../../redux/dishesSlice';
import { useDispatch} from 'react-redux';

const Filter = ({category}) => {
    const dispatch=useDispatch()
    const selectedCategory = useSelector(getSelectedCategopry);
    return (
        <div> 
           <p onClick={() =>{dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{category}</p>
        </div>
    )
}
export default Filter;