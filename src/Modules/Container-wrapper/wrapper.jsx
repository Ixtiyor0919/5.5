import './wrapper.css';
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar';

function Wrapper() {
    return (
        <div className="container-wrapper">
            <Sidebar />
            <Main />
        </div>
    )
}

export default Wrapper