import { Image ,Navbar} from 'react-bootstrap'
import "./navbar.css"

export default function NavigationBar(props) {
    return(
        <>
  
  <Navbar className="navBar" >
  
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
 
  </Navbar>
 
 
</>

    )
}