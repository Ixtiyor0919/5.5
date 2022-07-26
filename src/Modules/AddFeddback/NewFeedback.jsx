import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './NewFeedback.css';

function NewFeedback({newFeedback}) {
    const titleRef = useRef()
    const categoryRef = useRef()
    const detailRef = useRef()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const newData = {
            title: titleRef.current.value,
            category: categoryRef.current.value,
            upvotes: 0,
            description: detailRef.current.value,
            comments: [],
        }
        newFeedback(newData)
    }

    return(
        <>
        <div className='new-feedback-container'>
            <Link className='back' to={'/'}>Go Back</Link>
            <div className='new-feedback-wrapper'>
                <form onSubmit={handleFormSubmit}>
                    <h2 className='new-feedback-wrapper-title'>Create New Feedback</h2>
                    <div>
                        <h3 className='inner-card-title'>Feedback Title</h3>
                        <p className='inner-card-description'>Add a short, descriptive headline</p>
                        <input ref={titleRef} type="text" className="feedback-title" placeholder='Type your feddback here...'/>
                    </div>
                    <div>
                        <h3 className='inner-card-title'>Category</h3>
                        <p className='inner-card-description'>Choose a category for your feedback</p>
                        <select ref={categoryRef} defaultValue={''} name="new-celect" id="new-celect" className='new-feedback-select'>
                            <option defaultValue='Feature' disabled selected>Feature</option>
                            <option value='Feature'>Feature</option>
                            <option value='Enhancement'>Enhancement</option>
                            <option value='UX'>UX</option>
                            <option value='UI'>UI</option>
                            <option value='BUG'>BUG</option>
                        </select>
                    </div>
                    <div>
                        <h3 className='inner-card-title'>Feedback Detail</h3>
                        <p className='inner-card-description'>
                            Include any specific comments on what should be improved, added, etc.
                        </p>
                        <textarea ref={detailRef} name="text" id="text" cols="30" rows="10" className='feedback-content' placeholder='New feedback deatil...'></textarea>
                    </div>
                    <div className='new-feedback-buttons'>
                        <button type='reset' className='new-feedback-cancel-btn'>Cancel</button>
                        <button type='submit' className='new-feedback-add-btn'>Add Feedback</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default NewFeedback;