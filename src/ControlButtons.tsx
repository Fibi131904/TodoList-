import { type } from 'os';
import React from 'react';
import { FilterValuesType } from './App';




type ControlButtonsType= {
    changeFilter:(filter:FilterValuesType) => void
}


function ControlButtons(props: ControlButtonsType) {
    return (


        <div>
            <button onClick={()=> props.changeFilter('all')}>All</button>
            <button onClick={()=> props.changeFilter('active')}>Active</button>
            <button onClick={()=> props.changeFilter('completed')}>Completed</button>
            
        </div>
    );
}
export default ControlButtons;