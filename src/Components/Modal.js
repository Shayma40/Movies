import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSave })=> {
    const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
};

const cleardata= () =>{
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
}

const handleclose= ( )=> {
    onClose();
    cleardata();
}
const handleSave = () => {
    onSave(newMovie);
    cleardata();
    onClose();
};

return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2em'}}>Add New Movie</h2>
        <button onClick={handleclose} style={{ background: 'none', border: '2px solid grey', borderRadius: '30%', cursor: 'pointer', padding: '5px' }}>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>X</span>
        </button>
        </div>
        <table>
            <tbody>
            <tr>
                <td>Title:</td>
                <td ><input style={{ borderRadius: '30px', border: 'none'}} type="text" name="title" value={newMovie.title} onChange={handleInputChange} /></td>
            </tr>
            <tr>
                <td>Description:</td>
                <td><textarea name="description" value={newMovie.description} onChange={handleInputChange} /></td>
            </tr>
            <tr>
                <td>Poster URL:</td>
                <td><input style={{ borderRadius: '30px', border: 'none'}} type="text" name="posterURL" value={newMovie.posterURL} onChange={handleInputChange} /></td>
            </tr>
            <tr>
                <td>Rating:</td>
                <td><input style={{ borderRadius: '30px', border: 'none'}} type="number" name="rating" value={newMovie.rating} onChange={handleInputChange} /></td>
            </tr>
            </tbody>
        </table>
        <div className="modal-buttons" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button style={{ borderRadius: '30px', border: 'none' }} onClick={handleclose}>Cancel</button>
            <button style={{ borderRadius: '30px', border: 'none' }} onClick={handleSave}>Save</button>
        </div>
        </div>
    </div>
);
};

export default Modal;
