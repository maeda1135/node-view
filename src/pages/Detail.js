import React, {useState} from 'react'
import {
    Button,
    CssBaseline
} from '@material-ui/core'
// import {
// } from '@coreui/coreui'
import {
    CContainer,
    CRow,
    CCol,
    CDataTable,
    CButton,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CInput,
    CBadge,
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

export const Detail = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    console.log("return");

    return (
        <React.Fragment className="detail">
            <CContainer className="py-2">
                <CRow>
                    <CCol xs="3"></CCol>
                    <CCol xs="6" className="bg-secondary py-3">
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
                    <CCol xs="3"></CCol>
                </CRow>
            </CContainer>
        </React.Fragment>
    )
}
