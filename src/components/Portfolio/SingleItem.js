import React, { useState } from 'react';
import './Portfolio.css';
import { FaPlus } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SingleItem = ({ item }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="col-md-3">
            <div className="portfolio-item">
                <div className="portfolio-image">
                    <img src={item.image} alt="" />
                </div>
                <div className="overlay">
                    <h5>{item.category}</h5>
                    <span className='white' onClick={handleShow}> <FaPlus className='preview-item' /> </span>
                </div>
            </div>

            <Modal size='lg' show={show} onHide={handleClose} centerd>
                <Modal.Header closeButton>
                    <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="modal-image">
                                <img src={item.image} alt="modal item" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="portfolio-description">
                                <h4>{item.name}</h4>
                                {item.link && <span>Live : <a href={item.link}>{item.link}</a></span>}
                                {item.figma && <span>Figma : <a href={item.figma}>{item.figma}</a></span>}
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" size='sm' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SingleItem;