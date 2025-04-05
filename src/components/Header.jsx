
const Header = ({toggleNav}) => {
  
    return (
        
        <div className="header">
            <img src="public/MenuIcons.svg" alt="Logo"
            onClick={toggleNav}
            style={{cursor:'pointer'}} />
            <h1>Get Your Dream</h1>
           
        </div> 
    
    )
    };
export default Header;