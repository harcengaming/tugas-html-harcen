import React from 'react'
import './Beranda.css'

function Beranda() {
    return (
        <div> 
            <form class="p-4">
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="mb-3">
                    <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck2" />
                    <label class="form-check-label" for="dropdownCheck2">
                        Remember me
                    </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}

export default Beranda
