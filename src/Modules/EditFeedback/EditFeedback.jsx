import './EditFeedback.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function EditFeedback() {
    const navigate = useNavigate()
    return(
        <>
        <div className='new-feedback-container'>
            <Link className='back' to={'/Comments'} onClick={() => navigate(-1)}>Go Back</Link>
            <div className='new-feedback-wrapper'>
                <form>
                <h2 className='new-feedback-wrapper-title'>Editing ‘Add a dark theme option’</h2>
                <div>
                    <h3 className='inner-card-title'>Feedback Title</h3>
                    <p className='inner-card-description'>Add a short, descriptive headline</p>
                    <input type="text" className="feedback-title" placeholder='Type your feddback here'/>
                </div>
                <div>
                    <h3 className='inner-card-title'>Category</h3>
                    <p className='inner-card-description'>Choose a category for your feedback</p>
                    <select defaultValue={''} name="new-celect" id="new-celect" className='new-feedback-select'>
                        <option disabled selected>Feature</option>
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
                    <textarea name="" id="" cols="30" rows="10" className='new-feedback-detail'></textarea>
                </div>
                <div className='new-feedback-buttons'>
                    <button type='reset' className='new-feedback-delete-btn'>Delete</button>
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