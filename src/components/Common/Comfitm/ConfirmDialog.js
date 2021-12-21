import { Modal, Button } from 'react-bootstrap';

const ConfirmDialog = ({
    dialogInfo,
    show,
    onClose,
    onSave,
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{dialogInfo?.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{dialogInfo?.message}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>No</Button>
                <Button variant="primary" onClick={onSave}>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;