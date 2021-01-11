import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import {
    Card
} from '@material-ui/core'
import {} from '@coreui/coreui'
import {
    CContainer,
    CRow,
    CCol,
    CButton,
    CCarousel,
    CCarouselIndicators,
    CCarouselInner,
    CCarouselItem,
    CCarouselCaption,
    CCarouselControl
} from '@coreui/react'
// import {
// } from '@coreui/coreui'

import '../style.scss';

import types from '../data/type.json'

export const TestPage = () => {
    const history = useHistory();
    const [activeIndex, setActiveIndex] = useState(0)

    const goHome = ()=>{
        history.push("/home");
    }

    return (
        <React.Fragment>
            <CContainer className="detail py-2">
                <CRow>
                    <CCol xs="10" className="bg-secondary py-3"></CCol>
                    <CCol xs="2" className="bg-secondary py-3">
                        <CButton color="info" onClick={goHome}>HOME</CButton>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol xs="12" className="bg-secondary py-3">
                        <CCarousel activeIndex={activeIndex}>
                            <CCarouselIndicators/>
                            <CCarouselInner>
                            <CCarouselItem>
                                <img className="img d-block w-100" src={`${process.env.PUBLIC_URL}/carrot.png`} alt="carrot"/>
                                <CCarouselCaption><h3>にんじん</h3><p>carrot</p></CCarouselCaption>
                            </CCarouselItem>
                            <CCarouselItem>
                                <img className="img d-block w-100" src={`${process.env.PUBLIC_URL}/greenPepper.png`} alt="greenPepper"/>
                                <CCarouselCaption><h3>ピーマン</h3><p>green pepper</p></CCarouselCaption>
                            </CCarouselItem>
                            <CCarouselItem>
                                <img className="img d-block w-100" src={`${process.env.PUBLIC_URL}/nagasawa.png`} alt="nagasawa"/>
                                <CCarouselCaption><h3>玉ねぎ</h3><p>nagasawa</p></CCarouselCaption>
                            </CCarouselItem>
                            <CCarouselItem>
                                <img className="img d-block w-100" src={`${process.env.PUBLIC_URL}/potato.png`} alt="potato"/>
                                <CCarouselCaption><h3>じゃがいも</h3><p>potato</p></CCarouselCaption>
                            </CCarouselItem>
                            </CCarouselInner>
                            <CCarouselControl direction="prev"/>
                            <CCarouselControl direction="next"/>
                        </CCarousel>
                    </CCol>
                </CRow>
            </CContainer>
        </React.Fragment>
    )
}
