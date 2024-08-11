import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">FutShopping</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/camisetas">Camisetas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/shorts">Shorts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/botines">Botines</Link>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>

        </>)
}

export default NavBar;