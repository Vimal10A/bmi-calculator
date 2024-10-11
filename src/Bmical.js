import  { useEffect, useState } from 'react'

export const Bmical = () => {
    let [height,setheight]=useState("");
    let [weight,setweight]=useState("");
    let [loading,setloading]=useState(true);
    let [bmivalue,setbmivalue]=useState("");
    let [status,setstatus]=useState("");
    useEffect(()=>{
        setheight("170");
        setweight("65");
    },[])
    let bmicalcul=()=>{
        let h=height/100;
        let ans=Math.floor(weight/(h*h));
        setbmivalue(ans);
        let stat;
        if(ans<18){
            stat="Under-Weight";
        }else if(18<=ans && ans<25){
            stat="Normal";
        }else{
            stat="Over-Weight";
        }
        setstatus(stat);
        setloading(false);
    }
  return (
    <>
    <div className='container'>
        <div className='image'>
        <img src='images/diet.png' alt="diet"></img>
        </div>
        <div className='details'>
            <h1>Bmi Calculator</h1>
            <label htmlFor='height'>Height (in cm):</label>
            <input type='text' id="height" value={height} onChange={(e)=>(setheight(e.target.value))}></input>
            <label htmlFor='weight'>Weight (in Kg):</label>
            <input type='text' id="weight" value={weight} onChange={(e)=>(setweight(e.target.value))}></input>
            <button onClick={bmicalcul}> Find BMI</button>
            {!loading && <div className='result'>
                <p>Bmi Value : {bmivalue}</p>
                <p>Status : {status}</p>
            </div> }
            
        </div>
    </div>
     
     </>
  )
}
