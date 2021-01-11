import React from 'react'
import { useHistory } from 'react-router-dom';
import {
    CContainer,
    CRow,
    CCol,
    CButton,
    CAlert
} from '@coreui/react'

import '../style.scss';

export const Home = () => {
    const history = useHistory();

    const goTodo = ()=>{
        history.push("/todo");
    }

    const goTest = ()=>{
        history.push("/test");
    }

    return (
        <div className="home">
            <CContainer>
                <CAlert color="primary">HOME画面</CAlert>
                <CRow className="space"></CRow>
                <CContainer className="bg-secondary">
                    <CRow className="py-3">
                        <CCol xs="4"></CCol>
                        <CCol xs="4">
                            <CButton color="primary" onClick={goTodo}>TODO</CButton>
                        </CCol>
                        <CCol xs="4"></CCol>
                    </CRow>
                    <CRow className="py-3">
                        <CCol xs="4"></CCol>
                        <CCol xs="4">
                            <CButton color="danger" onClick={goTest}>テストページ</CButton>
                        </CCol>
                        <CCol xs="4"></CCol>
                    </CRow>
                </CContainer>
            </CContainer>
        </div>
    )
}
