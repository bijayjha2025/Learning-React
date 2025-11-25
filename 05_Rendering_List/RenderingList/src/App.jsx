
import List from "./List.jsx"

function App() {

   const fruits = [{id: 1, name: "Apple", calories: 95},
                    {id: 2, name: "Grapes", calories : 45},
                    {id: 3, name: "Berry", calories: 35},
                    {id: 4, name: "Banana", calories: 78},
                    {id: 5, name: "Coconut", calories: 67}];


  const vegetables = [{id: 6, name: "Onion", calories: 195},
                    {id: 7, name: "Tomato", calories : 245},
                    {id: 8, name: "Potato", calories: 315},
                    {id: 9, name: "Carror", calories: 178},
                    {id: 10, name: "Pea", calories: 167}];

  return (<>
    {fruits.length > 0 && <List items= {fruits} category= "Fruits"></List>}
    {vegetables.length > 0 && <List items= {vegetables} category= "Vegetables"></List>}
    </>
  );
}

export default App
