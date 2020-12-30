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
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CSpinner
} from '@coreui/react'

import '../style.scss';

const INITIAL_TASK = [
    {id: 1, title: 'Reactのお勉強', detail: 'Reactのお勉強をします'},
    {id: 2, title: '買い物', detail: 'コンビニに買い物に行きます'},
    {id: 3, title: '掃除', detail: 'リビングの掃除をします'},
    {id: 4, title: '読書', detail: '漫画本を読みます'},
    {id: 5, title: '書類整理', detail: '仕事に使う書類を整理します'},
    {id: 6, title: 'テスト', detail: 'ただのテストです'}
]

export const Todo = () => {
    const [tasks, setTasks] = useState(INITIAL_TASK)
    const [task_title, setTask_title] = useState('');
    const [task_detail, setTask_detail] = useState('');
    const [currentItem, setCurrentItem] = useState({});
    const [loading, setLoading] = useState(false);

    const [modal, setModal] = useState(false);

    const toggle = ()=>{
        setModal(!modal);
      }

    const handleTitleFieldChanges = e => {
        setTask_title(e.target.value)
    }

    const handleDetailFieldChanges = e => {
        setTask_detail(e.target.value)
    }

    const resetTextField = () => {
        setTask_title('')
        setTask_detail('')
    }

    const isTaskInclude = () => {
        return tasks.some(task => (task.title === task_title) && (task.detail === task_detail))
    }

    const addTask = () => {
        setLoading(true);
        setTasks([...tasks, {
            id: tasks.length + 1,
            title: task_title,
            detail: task_detail,
        }])
        resetTextField()
        setLoading(false);
    }

    const fields = [
        { key: 'id', label: 'No', _style: { width: '10%', textAlign: 'center', backgroundColor: '#ffcccc'} },
        { key: 'title', label: 'タイトル', _style: { width: '30%', textAlign: 'center', backgroundColor: '#ffcccc'} },
        { key: 'detail', label: '詳細', _style: { width: '50%', textAlign: 'center', backgroundColor: '#ffcccc'} },
        { key: 'delete', label: '削除', _style: { width: '10%', textAlign: 'center', backgroundColor: '#ffcccc'} }
    ]

    const deleteCheck = (item) => {
        console.log("delete check");
        setCurrentItem(item);
        setModal(!modal);
    }

    const deleteRow = () => {
        setLoading(true);
        setTasks(tasks.filter(row => row.id !== currentItem.id));
        setModal(!modal);
        setLoading(false);
    }


    console.log("return");
    console.log(tasks);

    return (
        <React.Fragment>
            <CContainer className="py-2">
                <CRow>
                    <CCol lg="12" md="12" sm="12" className="bg-secondary py-3">
                        <CContainer>
                            <CRow className="py-3">
                                <CCol lg="6" md="6" sm="6">
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
                                <CCol lg="6" md="6" sm="6"></CCol>
                            </CRow>
                            <CRow>
                                <CCol lg="6" md="6" sm="6">
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
                                <CCol lg="6" md="6" sm="6"></CCol>
                            </CRow>
                            <CRow>
                                <CCol lg="11" md="11" sm="11"></CCol>
                                <CCol lg="1" md="1" sm="1">
                                    <Button
                                        disabled={(task_title === '' || task_detail === '') || isTaskInclude()}
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
                    <CCol lg="12" md="12" sm="12">
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
                                )
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
