import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 500;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};
    
	return (
		<div className='note new'>
			<textarea
				rows='9'
				cols='9'
				placeholder='Type to add ......'
				value={noteText}
				onChange={handleChange}
			>
            </textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Character Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;