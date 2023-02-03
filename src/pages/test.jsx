import React from 'react'
import { productArray } from '../data'
import styled from 'styled-components'

const MapTest = () => {
  return (
    <>
    {productArray.map((item) => (
        <div key = {item.name}>
            <img src = {item.image} alt = 'Product Image' />
            
            <div >
                <h4>{item.name}</h4>
                <div>
                    <div>
                    <p>(100)</p>
                    </div>
                </div>
                <h6>{`$${(item.price).toFixed(2)}`}</h6>
            </div>
            </div>
            ))}
            </>
  )
}

export default MapTest