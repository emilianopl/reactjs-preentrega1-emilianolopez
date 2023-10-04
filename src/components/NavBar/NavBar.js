import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1 className='m-0 py-3'>Escuela de Cine</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <nav>
                        <ul className="nav nav-pills justify-content-center">
                            <li className="nav-item">
                                <button className="nav-link">Curso de Guión</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link">Curso de Dirección</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link">Curso de Edición y FX</button>
                            </li>
                            <li className="nav-item">
                                <CartWidget />
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;