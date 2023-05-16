
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [num1,setnum1] = useState(0);
  const [num2,setnum2] = useState(0);
  const [num3,setnum3] = useState(0);
  const [add,setadd] = useState(0);

  const calcSum = (e) =>{
    e.preventDefault();
    if(num1===0 || num2 ===0 || num3 ===0){
      alert("please enter valid values !")
    }
    else
    {
        let add = parseInt(num1)*parseInt(num2)*parseInt(num3)/100;
        console.log(add)
        setadd(parseInt(add))
    }

  }

  const handleClick = (e) =>{
    setadd(0);

  }




  return (
    <div className="app">
      <div className='container'>
        <div className='heading_text'>
          <h1 className='heading_one'>Simple Calculator</h1>
          <p className='heading_two'>Calculate your simple intrest easily</p>
        </div>
        <div className='total_amount_card'>
          <div className='card_text '>
          <h3 className='total_amount_heading'>₹ {add}</h3>
          <p className='total_amount_para'>Total simple interest</p>
          </div>
        </div>

        <form onSubmit={calcSum}>
 
        <div className='input_area'>
            <div className='input_field'>
            <TextField type="number" value={num1 || ""} onChange={(e) => setnum1(e.target.value)} id="outlined-basic" label="₹ Principal amount" variant="outlined" />
            </div>
            <div className='input_field'>
            <TextField type="number" value={num2 || ""} onChange={(e) => setnum2(e.target.value)} id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" />
            </div>
            <div className='input_field'>
            <TextField  type="number" value={num3 || ""} onChange={(e) => setnum3(e.target.value)} id="outlined-basic" label="Time period ( Yr )" variant="outlined" />
            </div>
        </div>
        <div className='button_collection'>
          <Stack spacing={2} direction="row">       
          <Button type='submit' className='btn_one' style={{backgroundColor: 'black'}} variant="contained">Calculate</Button>
          <Button className='btn_one'  onClick={handleClick}  variant="outlined">Reset</Button>
          </Stack>
        </div>
        </form>
 

      </div>
    </div>
  );
}

export default App;
