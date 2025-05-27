import '../css/NavBar.css'

const NavBar = () => {
    return (
        <nav className="nav-container">
            <a className="nav-link" href="">Gloweate</a>
            <a className="nav-link" href="">Nuevos</a>
            <a className="nav-link" href="">Mas vendidos</a>
            <a className="nav-link" href="">Ofertas</a>

            <cartWidget/>
        </nav>
    )
}

export default NavBar