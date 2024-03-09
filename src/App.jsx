import List from './components/List'
import './App.css'
function App() {
  const fruits=[{id:1,name:"mangoes",calories:97},
  {id:2,name:"oranges",calories:37},
  {id:3,name:"avocado",calories:197},
  {id:4,name:"apple",calories:137},
  {id:5,name:"peach",calories:56}];

  const vegetables=[{id:6,name:"managu",calories:97},
  {id:7,name:"kales",calories:37},
  {id:8,name:"tomato",calories:197},
  {id:9,name:"cabs",calories:137},
  {id:10,name:"kunde",calories:56}];
  return (
    <>
    <List items={fruits} category="fruits"/>
    <List items={vegetables} category="veges"/>

    </>
  );
}

export default App
