import React, { Component } from 'react'
import {ThemeContext} from '../components/contexts/ThemeContext'

class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        console.log(this.context)
        const{ isLightTheme, light, dark}= this.context;
        const theme = isLightTheme ? light : dark; 
        return (
            <nav style={{background:theme.ui, color: theme.syntax}}>

                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cont
                        act</li>
                    
                </ul>
            </nav>
                
            
        )
    }
}

export default Navbar