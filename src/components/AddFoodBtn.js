const addFoodBtn = ({onAdd, product}) => {
    return ( 
        <div className="button">
            <button onClick={(clickEvent) => {
                onAdd(product)
            }}>Add To Cart</button>
        </div>
     );
}

 
export default addFoodBtn;



