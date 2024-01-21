import { forwardRef, useState } from 'react';
import logo from '../assets/Foody Zone.png';

const Navbar = forwardRef(({ showRecipes }, ref) => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        if (!search) {
            return;
        }

        showRecipes(search);
        setSearch('');
    }
    return (
        <nav className="navbar" ref={ref}>

            <div className="container d-flex flex-column gap-3 flex-md-row py-4">

                <div id="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <form className="d-flex" role="search" onSubmit={handleSearch}>

                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />

                    <button className="btn btn-danger" type="submit">Search</button>

                </form>

            </div>
        </nav>
    )
})

export default Navbar
