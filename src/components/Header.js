import React from 'react'
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
} from '@coreui/react'

import '../style.scss';

export const Header = () => {
    // const history = useHistory();

    // function detail() {
    //     console.log("history");
    //     history.push('/detail');
    // }

    return (
        <React.Fragment>
            <CContainer className="py-3">
                <CRow>
                    <CCol lg="12" className="bg-success py-3">
                        <CContainer>
                            <CRow>
                                <CCol lg="1">
                                    <Avatar alt="user" src={`${process.env.PUBLIC_URL}/user.png`} />
                                </CCol>
                                <CCol lg="9">
                                    <label className="userLabel">ユーザー名: 玉ねぎマン</label>
                                </CCol>
                                <CCol lg="2">
                                    <Link to="/"><CButton color="primary" className="homeButton">ホーム</CButton></Link>
                                    <Link to="/detail"><CButton color="warning">詳細</CButton></Link>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol lg="6">
                                    <label className="appliLabel">TODO Appli</label>
                                </CCol>
                                <CCol lg="6">
                                    {/* <Link to="/detail"><Button variant="contained" color="primary">詳細</Button></Link> */}
                                </CCol>
                            </CRow>
                        </CContainer>
                    </CCol>
                </CRow>
            </CContainer>
        </React.Fragment>
    )
}
