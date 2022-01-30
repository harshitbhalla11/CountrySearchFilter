import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { Image ,Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./navbar.css"
export default function NavigationBar(props) {
    return(
        <>
  
  <Navbar bg="danger">
  
   <a  className="a"href='/'>
      <Image
        src="/logo.png"
        width="60px"
        height="60px"
        className="d-inline-block align-top bg-transparent "
        id="image"
        alt=""
      />
   </a>
  <BootstrapSwitchButton />
  </Navbar>
 
 
</>

    )
}