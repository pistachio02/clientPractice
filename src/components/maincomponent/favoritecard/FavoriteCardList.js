import React,{useState,useEffect} from 'react'
import FavoriteCard from './FavoriteCard'
import DummyUpData from '../../../data/DummyUpDate'
import axios from 'axios';
import swal from 'sweetalert';


function FavoriteCardList() {



    const [likeCards, setLikeCards] = useState([])


    const likeList = () => {
        axios
          .get('https://localhost:4000/zzim', {withCredentials: true})
          .then((res) => {
              setLikeCards(res.data)
          })
          .catch((err) => {
            console.log(err);
          })
    }

    const handleDelete = (id, e) => {
        // e.preventDefault()

        const healing_id = id;

        axios
          .post('https://localhost:4000/delzzim', { healing_id: healing_id }, {withCredentials: true})
          .then(() => {
            swal({
                title:"삭제완료!!",
                text:"삭제 완료 되었습니다!",
                icon:"success",
                dangerMode: true,
            })
            .then(() => {
                window.location.reload()
            })
          })
          .catch((err) => {
            console.log(err);
          })
    };

    useEffect(() => {
        likeList()
    }, []);


    return (
        <div>
        <div className="test-back1">
        <h1>찜목록페이지 입니다!</h1>
        <div className="test1">
        {likeCards && likeCards.map((likeCard, idx) => <FavoriteCard
        likeCard={likeCard}
        handleDelete={handleDelete}
        key={idx.id}/>)}
        </div>
        </div>
        </div>
    )
}

export default FavoriteCardList
