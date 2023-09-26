import Logo from '../assets/img/logo.png'

function NavBar(){
    return(
       <nav>
        <div className='nav--content'>
        <img src={Logo} alt="react logo" className='nav--logo'/>
        <h3 className='nav--logo_text'>ReactFacts</h3>
        </div> 
        <h4 className='nav--title'>React Course - Project 1</h4>
       </nav>
    )
}
export default NavBar;