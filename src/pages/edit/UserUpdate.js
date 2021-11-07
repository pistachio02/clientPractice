import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {isEmail, isPassword} from '../../components/utills/isEmail'
import swal from 'sweetalert';

const UserUpdate = ({userinfo}) => {

	const history = useHistory();


	const [userForm, setUserForm] = useState({
		nickname : '', 
		password : '',
		password2 : ''
	})
	const [errMsg, setErrMsg] = useState('');

	const handleForm = (key) => (e) => {
        setUserForm({ ...userForm, [key]: e.target.value });
    };

	const updateUser = () => {
		axios
			.post('https://localhost:4000/edit', { userForm }, { withCredentials: true })
			.then(() =>{
				swal({
					title: '수정 완료!',
					text: '닉네임과 비밀번호가 성공적으로 수정되었습니다!',
					icon: 'success'
				})
					.then(() => {
						window.location.reload();
					})
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const deleteUser = () => {
		axios
			.delete('https://localhost:4000/unregister', { withCredentials: true })
			.then(() =>{
				swal({
					title: '회원탈퇴 완료.',
					text: '회원탈퇴 완료되었습니다.',
					icon: 'success'
				})
					.then(() => {
						history.push('/');
						window.location.reload();
					})
			})
			.catch((err) => {
				console.log(err);
			});
	}

	if(userinfo){
		return (
			<div>
				<h1>{userinfo.nickname} 님의 회원 정보 수정</h1>

				<div>
					<div>닉네임 변경</div>
					<input 
					type = "text" 
					name ="nickname" 
					value={userForm.UserNick}
					onChange={handleForm('nickname')}
					></input>
				</div>

				<div>
					<div>비밀번호 확인</div>
					<input 
					type = "password" 
					name ="password" 
					value={userForm.password}
					onChange={handleForm('password')}
					></input>
				</div>

				<div>
					<div>비밀번호 2차확인</div>
					<input 
					type = "password" 
					name ="password2" 
					value={userForm.password2}
					onChange={handleForm('password2')}
					></input>
				</div>

				<button onClick={updateUser}>수정</button>
				<button>취소</button>
				<button  onClick={deleteUser}>회원탈퇴</button>
			</div>
		);
	} else {
		return (
			<div></div>
		)
	}
};

export default UserUpdate;