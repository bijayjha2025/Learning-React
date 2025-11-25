
function List(props){

    const category = props.category;
   const itemList = props.items;

   const listItems = itemList.map(item=> <li key={item.id}>
                                        {item.name}: &nbsp;
                                        <b>{item.calories}</b></li>)
    
    return(
        <>
        <h3 className="category">{category}</h3>
        <ol className="menu">{listItems}</ol>
        </>
    );




    // // fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetic
    // // fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alpha
    // fruits.sort((a,b) => a.calories - b.calories);  // numeric
    // // fruits.sort((a, b)=> b.calories - a.calories); // reverse numeric

    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //                                       {fruit.name}: &nbsp;
    //                                        <b>{fruit.calories}</b></li>);
    // return(<ul>{listItems}</ul>);

}


export default List