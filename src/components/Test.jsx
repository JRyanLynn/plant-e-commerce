import React, {useState} from 'react';
import styled from 'styled-components';



const Test = () => {
  return (
   <div style = {{ display: 'flex', height: '120px', width: '290px', border: '0.5px solid lightgray'}}>
      
      <div style = {{display: 'flex', flex: '1', height: 'auto', width: '20%', background: 'white', justifyContent: 'center', alignItems: 'center', padding: '5px'}}>
        <img style = {{width: '100%', height: '100%'}} src = 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9fc2RYwcLUt6bzRX7-wczkMM9nRxAZA57RxZoB9HKKUxF99vWbm_fkuYbV3iWqv8VVxNLA-sbGgRfr0M' />
      </div>

      <div style = {{display: 'flex', flex: '2', flexDirection: 'column', height: '110px', width: '500px', background: 'white', padding: '5px'}}>

        <div style = {{display: 'flex', flexDirection: 'row', height: '30px', width: 'auto', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '2px', marginRight: '5px'}}>
          <p style = {{fontSize: '24px', fontWeight: 'bold'}}>$10.99</p>
          <p style = {{fontSize: '16px'}}>X</p>
        </div>

        <div style = {{display: 'flex', flexDirection: 'row', fontSize: '16px', justifyContent: 'flex-start', height: '30px', width: 'auto', alignItems: 'center', background:'white', marginTop: '5px'}}>
          <p>Aloe Vera</p>
        </div>

      <div style = {{display: 'flex', flexDirection: 'row', height: '40px', width: '100%', fontSize: '16px', background: 'white', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px'}}>
        <button>Save</button>
        <div style = {{display: 'flex', flexDirection: 'row', alingItems: 'center', justifyContent: 'space-between', width: '50%', height: '20px', marginTop: '0px', marginRight: '5px'}}>
        <button style = {{display: 'flex', height: '25px', width: '25px', borderRadius: '20px', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none'}}>-</button>
        <p style = {{marginTop: '2px'}}>1</p>
        <button style = {{height: '25px', width: '25px', borderRadius: '20px', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none'}}>+</button>
        </div>
      </div>

    </div>
   </div>
  )
}

export default Test