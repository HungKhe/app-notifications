import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import FormPage from '../components/FormPage';
const EditNotify = (props) => {
    const { match } = props;
    return(
        <div className="createNotifyPage">
            <Header type="edit" title="Chỉnh sửa thông báo"/>
            <Container fluid={true}>
                <div className="boxContent">
                    <FormPage match={match} />
                </div>
            </Container>
        </div>
    )
}

export default EditNotify;