import React, { Component } from 'react';
import Nav from './Nav';
import logo from './assets/img/logo.svg';



class Header extends Component {
  state = {
    showMenu: false
  };

  // componentDidMount() {
  //
  // }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    return (
      <div className={`header ${this.state.showMenu ? 'is-active' : ''}`}>
        <img src={logo} className="logo" alt="logo" />
        <Nav {...this.state} />
        <button onClick={this.toggleMenu} className={`c-hamburger c-hamburger--htx ${this.state.showMenu ? 'is-active' : ''}`}>
          <span>toggle menu</span>
        </button>
      </div>
    );
  }
}

export default Header;

//
//
// import React from 'react';
// import Nav from './Nav';
//
// const Header = (props) => {
//   const toggleMenu = (event) => {
//     this.setState({ showMenu: true });
//   };
//   return (
//     <div className="header">
//       <Nav />
//       <button onClick={toggleMenu} className="c-hamburger c-hamburger--htx">
//         <span>toggle menu</span>
//       </button>
//     </div>
//   );
// };
//
// export default Header;



// <h1>{ this.state.showMenu ? "Menu Open" : null }</h1>




//{this.props.shouldHide ? 'hidden' : ''}

// <div className="logo">
//   <img src={logo} alt="logo" />
// </div>

// import React, { Component } from 'react';
// //import {TimelineMax, Power3} from 'gsap';
// import logo from './assets/img/logo.svg';
// import Nav from './Nav';
//
// class Header extends Component {
//
//   // componentDidMount () {
//   //   // Animated element variables
//   //   const header = document.querySelector('.App-logo');
//   //   const navLinks = document.getElementsByClassName('App-nav-link');
//   //
//   //   // Cache GSAP timeline
//   //   const tl = new TimelineMax({paused: true});
//   //   tl.fromTo(
//   //     header, // Element to animate variable
//   //     3.0, // Length of animation
//   //     {
//   //       opacity:0,
//   //       x:0,
//   //       y:-10
//   //     },
//   //     {
//   //       opacity:1,
//   //       x:0,
//   //       y:0,
//   //       ease:Power3.easeOut, // Easing Function
//   //       delay: 0.3 // Delay of animation start
//   //     }
//   //   );
//   //   // speed, stagger, delay
//   //   tl.staggerFromTo(
//   //     navLinks, // Element to animate variable
//   //     0.6, // Length of animation
//   //     {
//   //       opacity:0,
//   //       x:0,
//   //       y:40
//   //     },
//   //     {
//   //       opacity:1,
//   //       x:0,
//   //       y:0,
//   //       ease:Power3.easeOut // Easing Function
//   //     },
//   //     0.1, // Delay between staggered animations
//   //     .15 // Delay of animation start
//   //   );
//   //
//   //   // Play cached GSAP timeline!
//   //   tl.restart();
//   //
//   // }
//
//   render() {
//     return (
//       <div>
//         <div className="pageHeader">
//           <img src={logo} className="logo" alt="logo" />
//           <Nav />
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Header;
//
