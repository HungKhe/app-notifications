import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { createNotification, resetNotification, fetchItemNotification, updateNotification } from '../actions/notification';
import Snackbar from '../components/Snackbar';
import Loading from '../components/Loading';

function FormPage(props) {
    let { match, appCreateListNotify, appResetNotification, appFetchItemNotification, appUpdateNotification, loading, error, message, itemUpdate } = props;
    let history = useHistory();
    const [validated, setValidated] = useState(false);
    const [notifiObject, setnotifiObject] = useState({notifyLogin: false, notifyStatus: true});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isCreate, setIsCreate] = useState(true);
    const handleSubmit = async event => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            setIsSubmit(true);
            if(match)
                appUpdateNotification(notifiObject);
            else
                appCreateListNotify(notifiObject);
        }
        setValidated(true);
    };
    const initHandleChange = event => {
        let { name, value } = event.target;
        if(value === 'true')
            value = true;
        else if (value === 'false')
            value = false;
        notifiObject[name] = value;
        setnotifiObject(notifiObject);
    }
    if(JSON.stringify(itemUpdate) !== JSON.stringify(notifiObject)){
        setnotifiObject(itemUpdate);
    }
    useEffect(() => {
        if(match){
            appFetchItemNotification(match.params.id);
            setIsCreate(false)
        }else{
            appResetNotification();
        }
        let timer = setTimeout(() => { 
            if(isSubmit){appResetNotification(); setIsSubmit(false); history.push("/");}
            if(!match) {setIsCreate(false);}
        }, 3300);
        return () => clearTimeout(timer);
    }, [isSubmit]);
    if((loading && match && !isSubmit) || isCreate )
        return <Loading/>
    return (
        <>
            <Snackbar error={error} message={message}/>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="notificationForm">
                <Form.Row>
                    <Form.Group as={Col} md="6" sm="6" controlId="validationName">
                        <Form.Label>Tên thông báo</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ex: Tin khuyến mãi tháng 10"
                            name="notifyName"
                            onChange={initHandleChange}
                            defaultValue={ itemUpdate.notifyName }
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" sm="6" controlId="validationType">
                        <Form.Label>Loại thông báo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ex: Thông báo khuyến mãi"
                            name="notifyType"
                            onChange={initHandleChange}
                            defaultValue={itemUpdate.notifyType}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" sm="6" controlId="validationIcon">
                        <Form.Label>Link icon</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ex: //file.hstatic.net/1000176486/file/notify_1.png"
                            name="notifyIcon"
                            onChange={initHandleChange}
                            defaultValue={itemUpdate.notifyIcon}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" sm="6" controlId="validationLink">
                        <Form.Label>Link khi bấm vào thông báo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ex: /pages/notification-1"
                            name="notifyLink"
                            onChange={initHandleChange}
                            defaultValue={itemUpdate.notifyLink}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" sm="6" className="formStatus">
                        <Form.Label>Trạng thái</Form.Label>
                        <div className="radioGroup">
                            <div className="toggle-radio">
                                <input type="radio" value={true} onChange={initHandleChange} name="notifyStatus" id="yes" defaultChecked={itemUpdate.notifyStatus} />
                                <input type="radio" value={false} onChange={initHandleChange} name="notifyStatus" id="no" defaultChecked={!itemUpdate.notifyStatus} />
                                <div className="switch">
                                    <label htmlFor="yes">Bật</label>
                                    <label htmlFor="no">Tắt</label>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md="6" sm="6" controlId="validationWhen">
                        <Form.Label>Hiển thị khi</Form.Label>
                        <Form.Control defaultValue={itemUpdate.notifyLogin} onChange={initHandleChange} as="select" required name="notifyLogin">
                            <option value={false}>Không đăng nhập</option>
                            <option value={true}>Đăng nhập</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="12" sm="12" controlId="validationContent">
                        <Form.Label>Nội dung thông báo</Form.Label>
                        <Form.Control
                            required
                            as="textarea" 
                            rows="3"
                            placeholder="Nội dung thông báo: Dùng <b>High light</b> để bôi đậm nội dung cần High light..."
                            name="notifyContent"
                            onChange={initHandleChange}
                            defaultValue={itemUpdate.notifyContent}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12" sm="12" className="text-right">
                        <button disabled={loading && isSubmit} data-validate={validated} type="submit" className="btn insButton">
                            {
                                loading && isSubmit ? 
                                    <>
                                        <svg className="svg-icon" viewBox="0 0 20 20">
                                            <path fill="none" d="M16.889,8.82c0.002-0.038,0.006-0.075,0.006-0.112c0-1.427-1.158-2.585-2.586-2.585c-0.65,0-1.244,0.243-1.699,0.641c-0.92-1.421-2.513-2.364-4.333-2.364c-2.595,0-4.738,1.914-5.108,4.406c-1.518,0.361-2.648,1.722-2.648,3.35c0,1.904,1.543,3.447,3.447,3.447h12.065c1.904,0,3.447-1.543,3.447-3.447C19.48,10.547,18.377,9.201,16.889,8.82 M16.033,14.74H3.968c-1.426,0-2.585-1.16-2.585-2.586c0-1.2,0.816-2.233,1.985-2.512C3.71,9.561,3.969,9.279,4.021,8.931C4.333,6.838,6.162,5.26,8.277,5.26c1.461,0,2.811,0.736,3.61,1.971c0.135,0.21,0.355,0.351,0.604,0.385c0.039,0.006,0.08,0.008,0.119,0.008c0.207,0,0.408-0.074,0.566-0.212c0.316-0.275,0.719-0.428,1.133-0.428c0.951,0,1.725,0.773,1.723,1.733L16.027,8.78c-0.018,0.408,0.252,0.772,0.646,0.874c1.146,0.293,1.945,1.321,1.945,2.5C18.619,13.58,17.459,14.74,16.033,14.74"></path>
                                        </svg>Đang lưu...
                                    </>
                                :
                                    <>
                                        <svg className="svg-icon" viewBox="0 0 20 20">
                                            <path d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                                        </svg> { match ? 'Lưu thông báo' : 'Tạo thông báo'}
                                    </>
                            }
                        </button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </>
    );
}
const mapStateToProps = state => {
    return {
        loading: state.createNotify.loading,
        error: state.createNotify.error,
        message: state.createNotify.message,
        itemUpdate: state.createNotify.itemUpdate
    }
  }
const mapDispatchToProps = dispatch => {
    return {
        appCreateListNotify: (data) => dispatch(createNotification(data)),
        appResetNotification: () => dispatch(resetNotification()),
        appFetchItemNotification: id => dispatch(fetchItemNotification(id)),
        appUpdateNotification: data => dispatch(updateNotification(data))
        // appUpdatePromotions: (data) => dispatch({type: Types.API_UPDATE_PROMOTION, data})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormPage);
