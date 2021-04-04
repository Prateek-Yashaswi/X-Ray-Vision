import React from 'react';
import './Mynav.css';

function Mynav(){
    return(
        <div className='mynav'>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Rakathon 2021 : Team E.I.S</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Theme And Solution</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Main Content</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Developers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Technology Used</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Discussion Forum</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Mynav;