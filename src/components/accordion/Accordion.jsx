import React, { useState } from 'react'
import { data } from '../../data';
import AccordionItem from './AccordionItem';

const Accordion = () => {
    const [items, setItems] = useState(data);
  return (
    <div className='accordion w-full h-auto shadow-sm rounded-lg'>
        {
            items.map(item => (
                <AccordionItem key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default Accordion