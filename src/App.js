import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Result from './Result';






function App() {
		const [term,setTerm]=useState("")
		const [secretNum,setSecretNum]=useState(Math.floor(Math.random()*10) +1)
		
function handlesumbit(){
	setSecretNum(Math.floor(Math.random()*10) +1);
	
}
console.log(secretNum);
		const handleChange =(e) =>{
			setTerm(e.target.value)
		}

  return (
    <div className="container">
      <div className='head'>
		<label htmlFor='term'>Guess the number between 1 to 0 

		</label>

	  </div>
	  <input 
	  id='term'
	  type='text'
	  name='term'
	  onChange={handleChange}
	  >

	  </input>
	  <Result secretNum={secretNum} term={term} />
	  <button onClick={handlesumbit}>Reset</button>
    </div>
	
  );
}

export default App;
