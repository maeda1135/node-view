import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setName, setTodos } from "../store/todoReducer";
import {
    Button
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
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CSpinner
} from '@coreui/react'
import Select from 'react-select'
import 'react-select-css/dist/react-select-css.min.css';

import '../style.scss';

import data from '../data/data.json'
import types from '../data/type.json'

const INITIAL_TASK = data;

export const Todo = () => {
    const [tasks, setTasks] = useState(INITIAL_TASK)
    const [task_title, setTask_title] = useState('');
    const [task_detail, setTask_detail] = useState('');
    const [task_type, setTask_type] = useState('');
    const [currentItem, setCurrentItem] = useState({});
    const [loading, setLoading] = useState(false);

    const [modal, setModal] = useState(false);

    const name = useSelector(state => state.todo.name);
    console.log("selector1");
    console.log(name);
    const dispatch = useDispatch();
    // dispatch(setName("testname"));
    // console.log(name);

    useEffect(
        () => {
            console.log("useEffect");
            dispatch(setTodos(tasks));
        },
        [ tasks ]
    );

    const toggle = ()=>{
        setModal(!modal);
    }

    const handleTitleFieldChanges = e => {
        setTask_title(e.target.value)
    }

    const handleDetailFieldChanges = e => {
        setTask_detail(e.target.value)
    }

    const typeChange = e => {
        setTask_type(e.target.value)
    }

    const resetTextField = () => {
        setTask_title('')
        setTask_detail('')
        setTask_type('')
    }

    const isTaskInclude = () => {
        return tasks.some(task => (task.title === task_title) && (task.detail === task_detail))
    }

    const addTask = () => {
        setLoading(true);
        let str = "";
        types.map(function( value ) {
            if (task_type === value.label) {
                str = value.type;
            }
        });
        setTasks([...tasks, {
            id: tasks.length + 1,
            title: task_title,
            detail: task_detail,
            type: str,
        }])
        resetTextField();
        setLoading(false);
    }

    const fields = [
        { key: 'id', label: 'No', _style: { width: '10%', textAlign: 'center', backgroundColor: '#ffcccc'} },
        { key: 'title', label: 'タイトル', _style: { width: '30%', textAlign: 'center', backgroundColor: '#ffcccc'} },
        { key: 'detail', label: '詳細', _style: { width: '40%', textAlign: 'center', backgroundColor: '#ffcccc'} },
        { key: 'type', label: '種類', _style: { width: '10%', textAlign: 'center', backgroundColor: '#ffcccc'} },
        { key: 'delete', label: '削除', _style: { width: '10%', textAlign: 'center', backgroundColor: '#ffcccc'} }
    ]

    const deleteCheck = (item) => {
        setCurrentItem(item);
        setModal(!modal);
    }

    const deleteRow = () => {
        setLoading(true);
        setTasks(tasks.filter(row => row.id !== currentItem.id));
        setModal(!modal);
        setLoading(false);
    }

    const options = types;

    const createOption = (type) => {
        return (
            <option key={type.value} value={type.value}>{type.label}</option>
        );
    }

    console.log("return");
    console.log(tasks);

    return (
        <React.Fragment>
            <CContainer className="py-2">
                <CRow>
                    <CCol xs="12" lg="12" md="12" sm="12" className="bg-secondary py-3">
                        <CContainer>
                            <CRow className="py-3">
                                <CCol xs="6" lg="6" md="6" sm="6">
                                    <CInputGroup>
                                        <CInputGroupPrepend>
                                        <CInputGroupText className='prepend bg-info text-white'>
                                            タイトル
                                        </CInputGroupText>
                                        </CInputGroupPrepend>
                                        <CInput type="text" value={task_title} onChange={handleTitleFieldChanges}
                                            placeholder="タイトルを入力してください"/>
                                    </CInputGroup>
                                </CCol>
                                <CCol xs="6" lg="6" md="6" sm="6"></CCol>
                            </CRow>
                            <CRow className="py-3">
                                <CCol xs="6" lg="6" md="6" sm="6">
                                    <CInputGroup>
                                        <CInputGroupPrepend>
                                        <CInputGroupText className='prepend bg-info text-white'>
                                            詳細
                                        </CInputGroupText>
                                        </CInputGroupPrepend>
                                        <CInput type="text" value={task_detail} onChange={handleDetailFieldChanges}
                                            placeholder="詳細を入力してください"/>
                                    </CInputGroup>
                                </CCol>
                                <CCol xs="6" lg="6" md="6" sm="6"></CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="6" lg="6" md="6" sm="6">
                                    <select className="typeSelectBox" value={task_type} onChange={typeChange}>
                                        {options.map((type) =>
                                            createOption(type)
                                        )};
                                    </select>
                                    {/* <Select options={options} styles={{color: 'primary'}} /> */}
                                </CCol>
                                <CCol xs="6" lg="6" md="6" sm="6"></CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="11" lg="11" md="11" sm="11"></CCol>
                                <CCol xs="1" lg="1" md="1" sm="1">
                                    <Button
                                        disabled={(task_title === '' || task_detail === '' || task_type === '') || isTaskInclude()}
                                        variant='contained'
                                        color='primary'
                                        onClick={addTask}
                                        href=''
                                    >
                                        作成
                                    </Button>
                                </CCol>
                            </CRow>
                        </CContainer>
                    </CCol>
                </CRow>
            </CContainer>
            <CContainer className="table">
                <CRow>
                    <CCol xs="12" lg="12" md="12" sm="12">
                        <CDataTable
                            items={tasks}
                            fields={fields}
                            // columnFilter
                            tableFilter
                            // footer
                            itemsPerPageSelect
                            itemsPerPage={5}
                            hover
                            sorter
                            pagination
                            striped
                            border
                            scopedSlots = {{
                                'title':
                                    (item)=>{
                                    return (
                                        <td>
                                            <CBadge color='info' className="titleData">
                                                {item.title}
                                            </CBadge>
                                        </td>
                                    )
                                },
                                'delete':
                                (item, index)=>(
                                    <td className="deleteButton">
                                        {/* <CButton color='danger' onClick={() => deleteRow(item, index)}>削除</CButton> */}
                                        <CButton color='danger' onClick={() => deleteCheck(item)}>削除</CButton>
                                    </td>
                                ),
                                'type':
                                    (item)=>{
                                        let str = "";
                                        types.map(function( value ) {
                                            if (item.type === value.type) {
                                                str = value.label;
                                            }
                                        });
                                        return (
                                            <td>
                                                {str}
                                            </td>
                                    )
                                }
                            }}
                        />
                    </CCol>
                </CRow>
            </CContainer>

            <CModal
                show={modal}
                onClose={toggle}
            >
                <CModalHeader closeButton>削除します</CModalHeader>
                <CModalBody>
                    TODOを削除します。よろしいですか？
                </CModalBody>
                <CModalFooter>
                <CButton color="primary" onClick={deleteRow}>OK</CButton>{' '}
                <CButton color="secondary" onClick={toggle}>Cancel</CButton>
                </CModalFooter>
            </CModal>
            {loading ? <CSpinner className="loading" color="danger" variant="grow"/> : undefined}
        </React.Fragment>
    )
}
