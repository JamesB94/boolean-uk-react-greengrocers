const addFoodBtn = ({onAdd, product}) => {
    return ( 
        <div className="button">
            <button onClick={(clickEvent) => {
                console.log('i clicked add cart for product', product)
                onAdd(product)
            }}>Add To Cart</button>
        </div>
     );
}

 
export default addFoodBtn;



