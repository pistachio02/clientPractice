import { Link, useParams, useHistory } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
import { isEmpty } from '../../components/boardpagenation/index'

const BoardView = props => {
    // history 객체 로드 
    const history = useHistory()
    // route 에 지정한 id 파라미터
    const { id } = useParams()
    // 게시글 데이터 
    const [data, setData] = useState({})
    // 댓글 리스트 
    const [comments, setComments] = useState([])
    
    // 코멘트 불러오기
    const fetchComments = useCallback(async () => {
        try {
            const resp = await axios.get(`https://localhost:4000/view/${id}/comments`)
            setComments(resp.data.commentInfo)
        } catch (error) {
            console.error('댓글 데이터를 불러올 수 없습니다. error=>', error)
        }
    }, [id])

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const resp = await axios.get(`https://localhost:4000/board/view/${id}`)
                    setData(resp.data.postInfo)
                } catch (error) {
                    console.error('게시글 데이터를 불러올 수 없습니다. error=>', error)
                }
            }

            fetchData()
            fetchComments()
        }
    }, [id, fetchComments])
   
    // 댓글 저장
    const writeComment = async (e) => {
        const content = prompt('댓글을 입력하세요.', '')

        if (content === null) {
            return
        }
        if (isEmpty(content)) {
            return alert('댓글이 입력되지 않았습니다.')
        }

        try {
            await axios.post(`https://localhost:4000/board/write/comment`, {
                boardId: id,
                content: content
            }, { withCredentials: true })
            fetchComments()

        } catch (error) {
            alert('댓글을 저장하지 못했습니다.')
        }
    }

    // 댓글 삭제 
    const deleteComment = async (commentId) => {
        if (!window.confirm('댓글을 삭제하시겠습니까?')) {
            return
        }
        try {
            await axios.post(`https://localhost:4000/board/delete/comment`, {
                id: commentId,
            }, { withCredentials: true })
            .then((res) => {
                if(res.data === 'Not Allowed!') {
                    return alert('작성자만 삭제가 가능합니다.')
                }
            })
            fetchComments()

        } catch (error) {
            alert('댓글을 삭제하지 못했습니다.')
        }
    }

    // 게시글 삭제
    const deleteData = async (e) => {
        if (!window.confirm('게시글을 삭제하시겠습니까?')) {
            return
        }
        try {
            await axios.post(`https://localhost:4000/board/delete`, {
                id: id,
            }, { withCredentials: true })
            .then((res) => {
                if(res.data === "Post Successfully Deleted!") {
                    alert('게시글을 삭제했습니다.')
                    history.push("/board")
                } else if(res.data === "Not Allowed!") {
                    alert('작성자만 삭제가 가능합니다.')
                } else {
                    return null;
                }
            })
        } catch (error) {
            alert('게시글을 삭제하지 못했습니다.')
        }
    }

    // 게시글 수정 페이지로 이동
    const modifyData = (e) => {
        history.push(`/board/write/${id}`)
    }

   

    return (
        <div>
            <h4>게시글 상세 페이지</h4>
            <div>
                <div>
                    <button onClick={modifyData}>수정</button>
                    {id
                    ?
                    <button onClick={deleteData}>삭제</button>
                    :
                    ""
                    }
                </div>
            </div>
            <div>
                <div>{data.title}</div>
                <div>{data.content}</div>
            </div>
            {comments.length > 0 && (
                <div className="list-group-flush">
                    {comments.map(item => 
                        <div key={item.id}>
                            {item.content} | {item.user_nickname} | {item.createdAt} 
                            <button   onClick={() => deleteComment(item.id)}>삭제</button>
                        </div>
                    )}
                </div>
            )}
            <div>
                <Link to="/board">
                    <button >뒤로가기</button>
                </Link>
                <button onClick={writeComment}>댓글 달기</button>         
                
            </div>
        </div>
    )
}

export default BoardView