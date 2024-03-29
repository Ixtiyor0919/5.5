import './Header.css'
import Vector from '../Header/Vector.svg'
import { Link } from 'react-router-dom';

function Header({data}) {
    return (
        <header className='header-container container'>
           <div className='header-left'>
                <div className='header-logo'>
                    <img src={Vector} alt="logo-img" className='header-logo-img'/>
                    <h3 className='header-logo-title'>{data} Suggestions</h3>
                </div>
            <div className='header-middle'>
                <p className='header-select-text'>Sort by:</p>
                <select className='header-select'>
                    <option value={1} disabled>Most Upvotes</option>
                    <option value={2}>Most Upvotes</option>
                </select>
            </div>
            </div>
            <Link className='new-feedback' to={'/NewFeedback'}>+ Add Feedback</Link>
        </header>
    )
}

export default Header;