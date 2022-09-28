// import '../styles/reset.css'
// import '../styles/index.css'
import AddFoodBtn from "./AddFoodBtn";

const Greengrocers = ({foodList, onAdd}) => {
    return ( 
        <>
        <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {foodList.map((product) => (
          <li key = {product.id}> 
           <img 
            src = { `/assets/icons/${product.id}.svg`}  
            />
            <AddFoodBtn onAdd ={onAdd} product ={product}  />
            </li> 
            ))}
        </ul>
      </header>
        
        </>

     );
}
 
export default Greengrocers;