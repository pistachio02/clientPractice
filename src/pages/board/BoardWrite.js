import { Link, useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { isEmpty } from '../../components/boardpagenation/index'
import './WriteStyled.css'


const BoardWrite = props => {
    const history = useHistory()
    const { id } = useParams()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(`https://localhost:4000/board/view/${id}`)
                
                const data = resp.data.postInfo;

                setTitle(data.title)
                setContent(data.content)

            } catch (error) {
                console.error('게시글 데이터를 불러올 수 없습니다. error=>', error)
            }
        }

        if (id) {
            fetchData()
        }

    }, [id])

    const submitForm = async (e) => {
        e.preventDefault()

        if (isEmpty(title)) {
            return alert('제목을 입력해주세요.')
        }
        if (isEmpty(content)) {
            return alert('내용을 입력해주세요.')
        }
        
        try {
            await axios.post('https://localhost:4000/board/write', {
                id: id,
                title: title,
                content: content
            }, { withCredentials: true })
            .then((res) => {
                if(res.data === 'Not Allowed!') {
                    alert('작성자만 수정이 가능합니다.')
                    history.push(`/board/view/${id}`)
                } else if(res.data === "Post Successfully Updated!"){
                    alert('수정되었습니다.')
                    history.push(`/board/view/${id}`)
                } else if(res.data === "Post Successfully Posted!") {
                    alert('등록되었습니다.');
                    history.push("/board")
                } else {
                    return null;
                }
            })
            
            // if (isEmpty(id)) {
            //     alert('등록되었습니다.')
            //     history.push("/board")
            // } else {
            //     alert('수정되었습니다.')
            //     history.push(`/board/view/${id}`)
            // }

        } catch (error) {
            alert('데이터를 저장하지 못했습니다.')
            history.push("/board")
        }
        
    }

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    const changeContent = (e) => {
        setContent(e.target.value)
    }

    return (
        <body>
            <form className ="boardContainer" onSubmit={submitForm}>
                <form className="boardHeader1" >
                    {/* <label>제목</label><br/> */}
                    <input type="text" placeholder="제목을 입력해주세요" value={title} onChange={changeTitle} />
                    {/* </form> */}
                    {/* <form className > */}
                    {/* <label>내용</label><br/> */}
                    <textarea rows={8} placeholder="내용을 입력해주세요." value={content} onChange={changeContent} />
                </form>
                <div>
                    <button>확인</button>
                    <Link to="/board"><button>취소</button></Link>
                </div>
            </form>
        </body>
    )
}

export default BoardWrite