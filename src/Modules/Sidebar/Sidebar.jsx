import { useRef } from "react";
import "./Sidebar.css"

function Sidebar() {
    const filterRef = useRef()
    return(
        <>
           <div className="aside-container">
                <aside className="mentor">
                    <h3 className="mentor-title">Frontend Mentor</h3>
                    <p className="mentor-text">Feedback Board</p>
                </aside>
                <aside className="buttons">
                    <label className="filter-label" htmlFor="id-All">
                        <input ref={filterRef} value='All' type="radio" name="filter" id="id-All" className="filter-radio"/>
                        <span className="btn btn--active">All</span>
                    </label>
                    <label className="filter-label" htmlFor='id-UI'>
                        <input ref={filterRef} value="UI" type="radio" name="filter" id="id-UI" className="filter-radio"/>
                        <span className="btn">UI</span>
                    </label>
                    <label className="filter-label" htmlFor="id-UX">
                        <input ref={filterRef} value="UX" type="radio" name="filter" id="id-UX" className="filter-radio"/>
                        <span className="btn">UX</span>
                    </label>
                    <label className="filter-label" htmlFor='id-Enhancement'>
                        <input ref={filterRef} value="Enhancement" type="radio" name="filter" id="id-Enhancement" className="filter-radio"/>
                        <span className="btn">Enhancement</span>
                    </label>
                    <label className="filter-label" htmlFor="id-Bug">
                        <input ref={filterRef} value="Bug" type="radio" name="filter" id="id-Bug" className="filter-radio"/>
                        <span className="btn">Bug</span>
                    </label>
                    <label className="filter-label" htmlFor="id-Feature">
                        <input ref={filterRef} value="Feature" type="radio" name="filter" id="id-Feature" className="filter-radio"/>
                        <span className="btn">Feature</span>
                    </label>
                </aside>
                <aside className="roadmap">
                    <div className="roadmap-top">
                        <p className="roadmap-top-title">Roadmap</p>
                        <p className="roadmap-top-link">view</p>
                    </div>
                    <div className="roadmap-bottom">
                        <div className="roadmap-bottom-card">
                            <span className="roadmap-bottom-card-color-first"></span>
                            <h3 className="roadmap-bottom-card-title">Planned</h3>
                            <span className="roadmap-bottom-card-variable">2</span>
                        </div>
                        <div className="roadmap-bottom-card">
                            <span className="roadmap-bottom-card-color-second"></span>
                            <h3 className="roadmap-bottom-card-title">In-Progress</h3>
                            <span className="roadmap-bottom-card-variable">3</span>
                        </div>
                        <div className="roadmap-bottom-card">
                            <span className="roadmap-bottom-card-color-third"></span>
                            <h3 className="roadmap-bottom-card-title">Live</h3>
                            <span className="roadmap-bottom-card-variable">1</span>
                        </div>
                    </div>
                </aside>
           </div>
        </>
    )
}

export default Sidebar;
