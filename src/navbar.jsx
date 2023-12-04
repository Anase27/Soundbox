export default function Nav() {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "#e3f2fd;"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        SoundBox
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginRight:"0!important",marginLeft:"auto!important"}}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Blog
                                </a>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Categories
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Headphones
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Ear phones
                                        </a>
                                    </li>
                                    <li>
                                        {/* <hr className="dropdown-divider" /> */}
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            IEMs
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Price
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Best under 1000
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Best under 2000
                                        </a>
                                    </li>
                                    <li>
                                        {/* <hr className="dropdown-divider" /> */}
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Best under 3000
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Best under 5000
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Best under 10000
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Best under 20000
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Best under 30000
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Best under 40000
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    On Sale
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Demo & Refurbished
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Unboxed
                                        </a>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Clearence
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >
                                    Forum
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >
                                    Help center
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-sm btn-outline-secondary" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}