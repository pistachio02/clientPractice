import React, { useState, useEffect } from 'react';


const BoardPagination = ({currentPage, totalPage, onMove}) => {
    const [list, setList] = useState([])

    useEffect(() => {
        const list = Array.from({length: totalPage}, (_, i) => i + 1)
        setList(list)

    }, [currentPage, totalPage])

    const movePage = (e, pageNo) => {
        // 이벤트 전파 방지 
        e.preventDefault()
        // 부모 컴포넌트에게서 전달받은 함수 호출
        onMove(e, pageNo)
    }

    return (
        <div>
                <button>
                {list.map(item => 
                    <div key={item}
                        onClick={(e) => movePage(e, item)} 
                        active={item === currentPage}>{item}</div>   
                )}
                </button>
        </div>
    )
}

export default BoardPagination