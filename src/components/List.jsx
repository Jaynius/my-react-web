import PropTypes from 'prop-types';
export default function List(props){
    const fruitss=props.items;
    const category=props.category
    const fruititems=fruitss.map(fruit=> <li key={fruit.id}>{fruit.name} &nbsp; <b>{fruit.calories}</b></li>)

       
    return(<> {category}<ol>{fruititems}</ol></>);
}
List.defaultProps={
    category:"category",
    items:[]
}
List.propTypes={
    category: PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    }))

}


// fruits.sort((a,b)=>b.name.localeCompare (a.name))//sort in alphabeetical z-A
        // fruits.sort((a,b)=>a.name.localeCompare (b.name)) sort in aplhabet 
        // fruits.sort((a,b)=>a.calories-b.calories) sort numerically
        // fruit.sort((a,b)=>a.id-b.id);
        // const highCal=fruits.filter(fruit=>fruit.calories>100);
        // const highCalList=highCal.map(highCal=> <li key={highCal.id}>{highCal.name} &nbsp; <b>{highCal.calories}</b></li>)
        
        // const lowCal=fruits.filter(fruit=>fruit.calories<100);
        // const lowCalList=lowCal.map(lowCal=><li key={lowCal.id}>{lowCal.name} &nbsp;<b>{lowCal.calories}</b></li>)