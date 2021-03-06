import React, {useState} from 'react'
import { useSelector } from "react-redux";
import {
    Card
} from '@material-ui/core'
import {} from '@coreui/coreui'
import {
    CContainer,
    CRow,
    CCol,
    CMedia,
    CMediaBody,
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

export const Detail = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const name = useSelector(state => state.todo.name);
    const todos = useSelector(state => state.todo.todos);
    console.log("selector2");
    console.log(name);
    console.log(todos);

    const house = todos.filter( function( todo ) {
        return todo.type === 'house';
    })
    const play = todos.filter( function( todo ) {
        return todo.type === 'play';
    })
    const work = todos.filter( function( todo ) {
        return todo.type === 'work';
    })
    const other = todos.filter( function( todo ) {
        return todo.type === 'other';
    })
    console.log("xxx");
    console.log(house);
    console.log(play);
    console.log(work);
    console.log(other);

    const createMedia = (type) => {
        console.log("createMedia");
        console.log(type);
        if (!type.type) {
            return (
                <></>
            )
        } else {
            let lengthStr = 0;
            switch (type.type) {
                case 'house':
                    lengthStr = house.length;
                    break;
                case 'play':
                    lengthStr = play.length;
                    break;
                case 'work':
                    lengthStr = work.length;
                    break;
                case 'other':
                    lengthStr = other.length;
                    break;
                default:
                    return;
            }
            return (
                <CCol xs="6" className="py-2">
                    <Card variant="outlined">
                        <CMedia>
                            <img className="image" src={`${process.env.PUBLIC_URL}/${type.type}.png`} height="50"/>
                            <CMediaBody>
                                <h5 className="mediaTitle">{type.label}</h5>
                                <hr />
                                <p className="mediaContent">
                                    {lengthStr}件
                                </p>
                            </CMediaBody>
                        </CMedia>
                    </Card>
                </CCol>
            );
        }
    }

    console.log("return");

    return (
        <React.Fragment>
            <CContainer className="detail py-2">
                <CRow>
                {types.map((type) =>
                    createMedia(type)
                )};
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
