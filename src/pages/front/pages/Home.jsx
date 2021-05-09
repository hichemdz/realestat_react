import React from 'react'
import {Header , Hero} from '../Componets';
import bg from '../img/bg.svg';
export default function Hom() {
    return (
        <div>
            <Header />
            <Hero bg={bg}/>
        </div>
    )
}
