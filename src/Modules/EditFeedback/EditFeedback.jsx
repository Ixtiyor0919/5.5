import './EditFeedback.css';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useRef } from 'react'

function EditFeedback({updateFeedback, data, deleteFeedbacks}) {
    const param = useParams()
    const current = data.find(todo => +todo.id === +param.id)
    const  id = current.id
    const navigate = useNavigate()
    const titleRef = useRef()
    const categoryRef = useRef()
    const detailRef = useRef()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const newData = {
            id,
            title: titleRef.current.value,
            category: categoryRef.current.value,
            description: detailRef.current.value,
        }
        updateFeedback(newData);
    }
    const handleFormDelete = (e) => {
        e.preventDefault();
        deleteFeedbacks(id);
    };

    return (
        <>
        <div className='new-feedback-container'>
            <Link className='back' to={`/Comments-${current.id}`} onClick={() => navigate(-1)}>Go Back</Link>
            <div className='new-feedback-wrapper'>
                <form onSubmit={handleFormSubmit}>
                <h2 className='new-feedback-wrapper-title'>Editing ‘Add a dark theme option’</h2>
                <div>
                    <h3 className='inner-card-title'>Feedback Title</h3>
                    <p className='inner-card-description'>Add a short, descriptive headline</p>
                    <input ref={titleRef} defaultValue={current.title} type="text" className="feedback-title" placeholder='Type your feddback here...'/>
                </div>
                <div>
                    <h3 className='inner-card-title'>Category</h3>
                    <p className='inner-card-description'>Choose a category for your feedback</p>
                    <select ref={categoryRef} defaultValue={current.category} name="new-celect" id="new-celect" className='new-feedback-select'>
                    {/* <option defaultValue={current.category} disabled selected>Feature</option> */}
                            <option value='Feature'>Feature</option>
                            <option value='Enhancement'>Enhancement</option>
                            <option value='UX'>UX</option>
                            <option value='UI'>UI</option>
                            <option value='BUG'>BUG</option>
                    </select>
                </div>
                <div>
                    <h3 className='inner-card-title'>Update Status</h3>
                    <p className='inner-card-description'>Change feedback state</p>
                    <select defaultValue={''} name="new-celect" id="new-celect" className='new-feedback-select'>
                        <option disabled selected>Planned</option>
                    </select>
                </div>
                <div>
                    <h3 className='inner-card-title'>Feedback Detail</h3>
                    <p className='inner-card-description'>
                        Include any specific comments on what should be improved, added, etc.
                    </p>
                    <textarea ref={detailRef} defaultValue={current.description} name="edit-feedback" id="edit-feedback" cols="30" rows="10" className='new-feedback-detail feedback-content' placeholder='Edit feedback detail...'></textarea>
                </div>
                <div className='new-feedback-buttons'>
                    <button type='reset' className='new-feedback-delete-btn' onClick={handleFormDelete}>Delete</button>
                    <div>
                        <button type='cancel' className='new-feedback-cancel-btn'>Cancel</button>
                        <button type='submit' className='new-feedback-add-btn'>Add Feedback</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default EditFeedback;