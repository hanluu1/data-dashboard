
const Header = ({toggleNav}) => {
  
    return (
        
        <div className="header">
            <img src="/public/MenuIcons.svg" alt="Logo"
            onClick={toggleNav}
            style={{cursor:'pointer'}} />
            <p>Filter Your Dream</p>
           
        </div> 
    
    )
    };
export default Header;