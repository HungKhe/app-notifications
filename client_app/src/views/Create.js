import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import FormPage from '../components/FormPage';
function Create() {
    return (
        <div className="createNotifyPage">
            <Header type="create" title="Thêm mới thông báo"/>
            <Container fluid={true}>
                <div className="boxContent">
                    <FormPage />
                </div>
            </Container>
        </div>
    );
}

export default Create;
