import "./Navbar.css"

function Navbar(){
    return (
    <nav className="navbar">
        <a href="/">ANATOMY</a>
        <nav className="nav-links">
            <a href="#menu">menu</a>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
        </nav>
     </nav>
    )
}
export default Navbar;