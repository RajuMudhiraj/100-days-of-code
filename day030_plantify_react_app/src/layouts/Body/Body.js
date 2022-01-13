import React from 'react';
import './Body.css'
import Button from '../../components/Button/Button'

export default class Body extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='body'>
               <Button className="plant1TreeBtn" value='Plant a tree' />
            </div>
        )
    }
}
