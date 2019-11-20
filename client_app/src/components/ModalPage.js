import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { deleteNotification } from '../actions/notification';
const ModalPage = props => {
    const { toggleModal, listArray, updateToggleModal, appDeleteNotification, loading, error, message } = props; 
    const [showModal, setShowModal] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const handleClose = () => { setShowModal(false); updateToggleModal(false) };
    const handleConfirm = () => { 
        setIsSaving(true)
        appDeleteNotification(listArray);
        // setShowModal(false); 
        console.log('done');
    };
    useEffect(() => {
        if(typeof toggleModal !== 'undefined')
            setShowModal(toggleModal);
        if(isSaving){
            
        }
    }, [toggleModal, loading])
    return (
        <Modal className="pageModal" show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Xác nhận</Modal.Title>
            </Modal.Header>
            <Modal.Body><p className="textStatus">Bạn thật sựa muốn xóa thông báo đã chọn?</p></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button disabled={loading} variant="primary" onClick={handleConfirm}>
                    {loading ? 'Đang lưu' : 'Lưu'}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
const mapStateToProps = state => {
    return {
        error: state.deleteNotify.error,
        message: state.deleteNotify.message,
        loading: state.deleteNotify.loading
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      appDeleteNotification: tp => dispatch(deleteNotification(tp))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ModalPage);