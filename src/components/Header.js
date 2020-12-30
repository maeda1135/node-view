import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {
    // Button,
    Avatar,
} from '@material-ui/core'
import {
    CButton,
    CContainer,
    CRow,
    CCol,
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter
} from '@coreui/react'

import '../style.scss';

export const Header = () => {
    const [modal, setModal] = useState(false);

    const toggle = ()=>{
        setModal(!modal);
      }

    // const history = useHistory();

    // function detail() {
    //     console.log("history");
    //     history.push('/detail');
    // }

    return (
        <React.Fragment>
            <CContainer className="py-3">
                <CRow>
                    <CCol lg="12" md="12" sm="12" className="bg-success py-3">
                        <CContainer>
                            <CRow>
                                <CCol lg="1" md="1" sm="1">
                                    <Avatar alt="user" src={`${process.env.PUBLIC_URL}/user.png`} 
                                        onClick={toggle} className="avatar"/>
                                </CCol>
                                <CCol lg="9" md="9" sm="9">
                                    <label className="userLabel">ユーザー名: <label className="username" onClick={toggle}>玉ねぎマン</label></label>
                                </CCol>
                                <CCol lg="2" md="2" sm="2">
                                    <Link to="/"><CButton color="primary" className="homeButton">ホーム</CButton></Link>
                                    <Link to="/detail"><CButton color="warning">詳細</CButton></Link>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol lg="6" md="6" sm="6">
                                    <label className="appliLabel">TODO Appli</label>
                                </CCol>
                                <CCol lg="6" md="6" sm="6">
                                    {/* <Link to="/detail"><Button variant="contained" color="primary">詳細</Button></Link> */}
                                </CCol>
                            </CRow>
                        </CContainer>
                    </CCol>
                </CRow>
            </CContainer>
            <CModal
                show={modal}
                onClose={toggle}
            >
                <CModalHeader style={{fontWeight:'bold', fontSize:'24px'}} closeButton>玉ねぎマン</CModalHeader>
                <CModalBody style={{textAlign:'center'}}>
                    <CContainer className="py-3">
                        <CRow>
                            <CCol lg="12" md="12" sm="12">
                                <img alt="user" src={`${process.env.PUBLIC_URL}/user.png`} />
                            </CCol>
                        </CRow>
                    </CContainer>
                </CModalBody>
                <CModalFooter>
                <CButton color="secondary" onClick={toggle}>Cancel</CButton>
                </CModalFooter>
            </CModal>
        </React.Fragment>
    )
}
