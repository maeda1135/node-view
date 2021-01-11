import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab'
import {
    CContainer,
    CRow,
    CCol,
    CButton,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CInput
} from '@coreui/react'

import '../style.scss';

import authData from '../data/auth.json'

export const Login = () => {
    const [alert, setAlert] = useState(false)
    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    const history = useHistory();

    const usernameChanges = e => {
        setUsername(e.target.value)
    }

    const passwordChanges = e => {
        setPassword(e.target.value)
    }

    const authLogin = ()=>{
        if ((username === authData[0].username) && (password === authData[0].password)) {
            history.push("/home");
        } else {
            setAlert(true)
            if (username !== authData[0].username) {
                setUsernameError(true);
            } else {
                setUsernameError(false);
            }
            if (password !== authData[0].password) {
                setPasswordError(true);
            } else {
                setPasswordError(false);
            }
        }
    }

    return (
        <div className="login">
        {alert ? <Alert severity="error">ユーザー名 または パスワードが違います！</Alert> : undefined}
            <CContainer className="py-5">
                <CRow className="space"></CRow>
                <CRow className="py-3">
                    <CCol xs="4"></CCol>
                    <CCol xs="4">
                        <CInputGroup>
                            <CInputGroupPrepend>
                            <CInputGroupText className='prepend bg-info text-white'>
                                Username
                            </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput type="text" value={username} onChange={usernameChanges}
                                className={usernameError ? "usernameError" : ""}
                                placeholder="ユーザー名を入力してください"/>
                        </CInputGroup>
                    </CCol>
                    <CCol xs="4"></CCol>
                </CRow>
                <CRow>
                    <CCol xs="4"></CCol>
                    <CCol xs="4">
                        <CInputGroup>
                            <CInputGroupPrepend>
                            <CInputGroupText className='prepend bg-info text-white'>
                                Password
                            </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput type="password" value={password} onChange={passwordChanges}
                                className={passwordError ? "passwordError" : ""}
                                placeholder="パスワードを入力してください"/>
                        </CInputGroup>
                    </CCol>
                    <CCol xs="4"></CCol>
                </CRow>
                <CRow className="py-3">
                    <CCol xs="4"></CCol>
                    <CCol xs="4">
                        <CButton color="secondary" onClick={authLogin}>ログイン</CButton>
                    </CCol>
                    <CCol xs="4"></CCol>
                </CRow>
            </CContainer>
        </div>
    )
}
