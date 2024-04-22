import Filter from "./Filter";

const AllCategories =() => {
    return (
        <div >
            <h1>🥘"Stay cheesy and keep eating delicious food."!</h1>
            {['SALADS', 'SEAFOOD', 'BURGERS', 'KEBABS', 'SIDES', 'ALL'].map(category=> <Filter category={category}/>)}
           
        </div>
    )
}
export default AllCategories;