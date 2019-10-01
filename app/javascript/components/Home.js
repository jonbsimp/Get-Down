import React from "react"
import PropTypes from "prop-types"
import Event from "./Event"
import { Nav, Navbar, NavItem, NavLink, NavbarBrand } from 'reactstrap'




class Home extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props



    return (
      <React.Fragment>
        <Navbar color = 'light'>
          <NavbarBrand href="/"><h1>Get Down</h1></NavbarBrand>
            <Nav>
              <NavItem>
                <NavLink href ="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href ="/Event">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users/sign_up">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={sign_in_route}>Log In</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        
        
          
        
      </React.Fragment>
      
      
    );
  }
}

export default Home


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ORIGINAL NAVBAR
// <nav class="navbar navbar-expand-md navbar-dark bg-primary mb-2">
//       	<a class="navbar-brand" href="./events">Light text</a>
//       	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
//       		<span class="navbar-toggler-icon"></span>
//       	</button>
//       	<div class="collapse navbar-collapse" id="navbarColor02">
//       		<ul class="navbar-nav ml-auto">
//       			<li class="nav-item">
//       				<a class="nav-link" href="#" title="Current breakpoint tier">
//       					Tier
//       					<span class="d-xl-inline d-none">XL</span>
//       					<span class="d-lg-inline d-xl-none d-none">LG</span>
//       					<span class="d-md-inline d-lg-none d-none">MD</span>
//       					<span class="d-sm-inline d-md-none d-none">SM</span>
//       					<span class="d-inline d-sm-none">XS</span>
//       				</a>
//       			</li>
//       			<li class="nav-item">
//                 <a class="nav-link" href="/users/sign_up">Sign Up</a>
//                 <a class="nav-link" href={sign_in_route}>Log In</a>
//             </li>
//       		</ul>
//       	</div>
//       </nav>