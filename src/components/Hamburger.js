import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';
import styls from '../css/styles.css'

const menuType = 'stack';

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      top: '16px',
      right: '36px'
      
    },
    bmBurgerBars: {
      background: '#563d7c'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#563d7c',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'table-row'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  var items = [
    <a key="0" href='/' className='rm-underline'>
      <span>Home</span>
    </a>,
    <a key ="1" href='/offerings' className='rm-underline'>
      <span>Offerings</span>
    </a>,
     <a key="2" href='/students' className='rm-underline'>
     <span>Students</span>
   </a>,
   <a key="3" href='/About' className='rm-underline'>
   <span>About</span>
 </a>,
    <a key="4" href='/contact' className='rm-underline'>
      <span>Contact</span>
    </a>
     
  ]
class Hamburger extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const Menu = BurgerMenu[menuType];
    return (
      <div id="outer-container-id">
      <Menu right={'right' === 'right'}
      styles={ styles } 
      outerContainerId="outer-container-id"
      >
                {items}
                
            </Menu>
      </div>
       
        )
    }
    
}

export default Hamburger;