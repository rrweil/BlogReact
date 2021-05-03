import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Layout = (props) => {
    const history = useHistory();

    const goToMostRecentPost = async () => {
        const { data } = await axios.get('/api/blog/getMostRecentPostId');
        history.push(`/postpage/${data}`);
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <a className="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">React Blog Site</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to='/' className='nav-link text-light'>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <button onClick={goToMostRecentPost} className='nav-link text-light btn btn-link'>
                                        Most Recent
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <Link to='/admin' className='nav-link text-light'>
                                        Admin
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container" style={{ marginTop: 60 }}>
                {props.children}
            </div>

        </div>
    )
}

export default Layout;