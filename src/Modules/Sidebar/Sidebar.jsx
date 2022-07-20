import "./Sidebar.css"

function Sidebar() {
    return(
        <>
           <div className="aside-container">
                <aside className="mentor">
                    <h3 className="mentor-title">Frontend Mentor</h3>
                    <p className="mentor-text">Feedback Board</p>
                </aside>
                <aside className="buttons">
                    <button className="btn btn--active">All</button>
                    <button className="btn">UI</button>
                    <button className="btn">UX</button>
                    <button className="btn">Enhancement</button>
                    <button className="btn">Bug</button>
                    <button className="btn">Feature</button>
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
