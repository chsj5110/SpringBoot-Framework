
import './App.css';

import Counter from './components/counter/Counter'

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

//{property1: 'value1', property2: 'value2'}
// function PlayingWithProps(properties){
//   console.log(properties.property1)
//   console.log(properties.property2)
//   return(
//     <div>Props</div>
//   )
// }

//리액트에서 프로퍼티를 사용할때 -> 구조분해
// function PlayingWithProps({property1, property2}){
//   console.log(property1)
//   console.log(property2)
//   return(
//     <div>Props</div>
//   )
// }


export default App;
