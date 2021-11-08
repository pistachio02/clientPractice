import React, { useState, useEffect } from 'react';
import { Link , useHistory } from 'react-router-dom';
import BoardPagination from '../../components/boardpagenation/BoardPagination'
import axios from 'axios'
import '../board/css/ListStyled.css'

const BoardList = () => {
    const history = useHistory()
    // 게시글 목록 state
    const [list, setList] = useState([])
    // 현재 페이지 번호
    const [currentPage, setCurrentPage] = useState(1)
    // 전체 페이지 갯수
    const [totalPage, setTotalPage] = useState(1)
    // 컴포넌트가 마운트될 때, 또는 currentPage 값이 변경되면 실행
    useEffect(() => {
        // 게시글 목록 호출
        async function fetchData() {
            try {
                const resp = await axios.get(`http://localhost:4000/list?page=${currentPage}`)
                const data = resp.data
                setList([...data.list])
                setTotalPage(data.info.totalPage)
                history.push('/board') 
            } catch (error) {
                console.error(error)
                swal('데이터를 불러오지 못했습니다.')
            }
        }
        fetchData()
    }, [currentPage])

    // 클릭한 페이지 번호를 저장
    const movePage = (e, pageNo) => {
        // 현재 페이지가 변경되면 게시글 목록 호출 함수가 트리거 된다.
        setCurrentPage(pageNo)
    }


    return (
        <>
            <div className ="cardWrap">   
            
                {list.map(el => 
                    <div class="card1"> 
                        <div key={el.id}>
                            <Link to={`board/view/${el.id}`}>
                                <div class="card-header"></div>
                                <div class="card-body-header">
                                    <div className="title-content">{el.title}</div>
                                    <div class = "card-body-nickname">작성자: {el.user_nickname}</div>
                                    <div>{el.content}</div>
                                    {/* <div class="card-body-hashtag">#ㅇㅏㄴ녀ㅇ</div> */}
                                </div>
                                <div className ="card-body-footer">
                                    {/* <hr className ="hrLine"/> */}
                                    {/* <i className = "icon-view_count">조회수 : {el.view_count}</i>
                                    <i className = "icon-comments_count ">{el.comments}</i> */}
                                    <i className ="reg_date">{el.createdAt}</i>
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
                  <Link className ="board-write-button" to="/board/write" ><button className ="board-write-button hover">글쓰기</button></Link>
            </div>
            {list.length > 0 && (
                <BoardPagination currentPage={currentPage} totalPage={totalPage} 
                onMove={movePage} />
            )}
       </>
    )
}

export default BoardList