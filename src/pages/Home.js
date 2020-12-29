import React, {useState} from 'react'
import {
    Button,
    // TextField,
    // Box,
    // Container,
    // Grid,
    CssBaseline,
    Avatar,
    // List,
    // ListItem,
    // ListItemText,
    // Checkbox,
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
    CBadge
    // CCollapse,
    // CCardBody,
} from '@coreui/react'

import '../style.scss';

const INITIAL_TASK = [
    {id: 1, title: 'Reactのお勉強',doing: false},
    {id: 2, title: '買い物',doing: false},
    {id: 3, title: '掃除',doing: false},
    {id: 4, title: '読書',doing: false},
    {id: 5, title: '書類整理',doing: false},
    {id: 6, title: 'テスト',doing: false}
]

export const Home = () => {
    const [tasks, setTasks] = useState(INITIAL_TASK)
    const [task_title, setTask_title] = useState('')

    const handleTextFieldChanges = e => {
        setTask_title(e.target.value)
    }

    const resetTextField = () => {
        setTask_title('')
    }

    const isTaskInclude = () => {
        return tasks.some(task => task.title === task_title)
    }

    const addTask = () => {
        setTasks([...tasks, {
            id: tasks.length + 1,
            title: task_title,
            doing: false,
        }])
        resetTextField()
    }

    const fields = [
        { key: 'id', label: 'No', _style: { width: '10%', textAlign: 'center', backgroundColor: '#ffcccc'} },
        { key: 'title', label: 'タイトル', _style: { width: '50%', textAlign: 'center', backgroundColor: '#ffcccc'} },
        { key: 'delete', label: '削除', _style: { width: '10%', textAlign: 'center', backgroundColor: '#ffcccc'} }
    ]

    const getBadge = (status)=>{
        switch (status) {
            case 'Active': return 'success'
            case 'Inactive': return 'secondary'
            case 'Pending': return 'warning'
            case 'Banned': return 'danger'
            default: return 'primary'
        }
    }
    
    const deleteRow = (item) => {
        setTasks(tasks.filter(row => row.id !== item.id))
    }


    console.log("return");
    console.log(tasks);

    return (
        <React.Fragment>
            <CssBaseline/>
            <CContainer className="py-3">
                <CRow>
                    <CCol lg="12" className="bg-success py-3">
                        <CContainer>
                            <CRow>
                                <CCol lg="1">
                                    <Avatar alt="user" src={`${process.env.PUBLIC_URL}/user.png`} />
                                </CCol>
                                <CCol lg="11">
                                    <label className="userLabel">ユーザー名: 玉ねぎマン</label>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol lg="6">
                                    <label className="appliLabel">TODO Appli</label>
                                </CCol>
                                <CCol lg="6"></CCol>
                            </CRow>
                        </CContainer>
                    </CCol>
                </CRow>
            </CContainer>
            <CContainer className="py-2">
                <CRow>
                    <CCol lg="12" className="bg-secondary py-3">
                        <CContainer>
                            <CRow>
                                <CCol lg="6">
                                    <CInputGroup>
                                        <CInputGroupPrepend>
                                        <CInputGroupText className={'bg-info text-white'}>
                                            タイトル
                                        </CInputGroupText>
                                        </CInputGroupPrepend>
                                        <CInput type="text" value={task_title} onChange={handleTextFieldChanges}/>
                                    </CInputGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol lg="11"></CCol>
                                <CCol lg="1">
                                    <Button
                                        disabled={task_title === '' || isTaskInclude()}
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
                    <CCol>
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
                                        <CButton color='danger' onClick={() => deleteRow(item, index)}>削除</CButton>
                                    </td>
                                )
                            }}
                        />
                    </CCol>
                </CRow>
            </CContainer>
        </React.Fragment>
    )
}
