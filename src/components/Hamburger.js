import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';

const menuType = 'stack';

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      top: '36px',
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
    <a key="0" href='/'>
      <span>Home</span>
    </a>,
    <a key ="1" href='/about'>
      <span>About</span>
    </a>,
    <a key="2" href='/contact'>
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