import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Item({ name, isPacked }) {
  return (
    <li className="item">
      
      {name} {isPacked && '✔'}
    </li>
  );
}

export default function PackingList() {
  
  return (
    
    <section>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum, doloribus praesentium numquam asperiores explicabo ad obcaecati. Quo, ut ipsum.</p>
      <h2>Sally Ride's Packing List</h2>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
