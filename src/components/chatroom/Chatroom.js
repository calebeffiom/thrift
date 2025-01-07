import { useState } from "react";
import profile from "../images/profile.png";
import { useLocation } from 'react-router-dom';
import Userinput from "../signup and login/Userinput";
// import { set, get, child, ref, database } from "../hooks/firebase";
import { useNavigate } from "react-router-dom";
import { collection, query, where, fdb, getDocs, doc, setDoc, rdb, set, ref, getDoc, updateDoc } from "../hooks/firebase"
import { serverTimestamp } from "firebase/database";
import React, { useEffect } from 'react';
const Chatroom = () => {
    const [search, setSearch] = useState("")
    const location = useLocation();
    const user = location.state;
    const [searchedUserName, setSearchedUserName] = useState([]);
    const [noChat, setNoChat] = useState(true)
    const [chatList, setChatList] = useState(null)
    const [userFound, setUserFound] = useState(null)
    const navigate = useNavigate();
    const onChange = (e) => {
        const search = e.target.value;
        setSearch(search)
    }

    const searchUser = async () => {
        setSearchedUserName([]);
        const usersRef = collection(fdb, "users");
        const q = query(usersRef, where("username", "==", `${search}`));
        const querySnapshot = await getDocs(q);
        if(querySnapshot.empty){
            setUserFound(false)
            // console.log(userFound)
        }
        else{
            setUserFound(true)
            querySnapshot.forEach((doc) => {
                setSearchedUserName(prev => [...prev, { username: doc.data().username, uid: doc.data().uid }])
            })
            
        }
        
    }
    const onClick = async (i) => {
        // console.log(searchedUserName[i])
        const combinedUID = user.uid > searchedUserName[i].uid ? user.uid + searchedUserName[i].uid : searchedUserName[i].uid + user.uid
        try {
            const res = getDoc(doc(fdb, "chats", combinedUID))
            if (!(await res).exists()) {
                await setDoc(doc(fdb, "chats", combinedUID), {
                    messages: []
                });
                await updateDoc(doc(fdb, "chatRooms", user.uid), {
                    [combinedUID]: {
                        uid: searchedUserName[i].uid,
                        username: searchedUserName[i].username
                    }
                });
                await updateDoc(doc(fdb, "chatRooms", searchedUserName[i].uid), {
                    [combinedUID]: {
                        uid: user.uid,
                        username: user.username
                    },
                });
                navigate("/chat" ,{state:{uid: searchedUserName[i].uid, username: searchedUserName[i].username, currentUsername: user.username, currentUseruid: user.uid}});
                
            }
            else {
                alert("chat exists")
                navigate("/chat" ,{state:{uid: searchedUserName[i].uid, username: searchedUserName[i].username, currentUsername: user.username, currentUseruid: user.uid}});
            }
            


        }
        catch (err) {
            alert(err.message)
            console.log(err)

        }
    }
    useEffect(()=>{
        const fetchData = async () => {
            const docRef = doc(fdb, "chatRooms", user.uid);
            try {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const docData = docSnap.data();
                    if (Object.keys(docData).length === 0) {
                        setNoChat(true);
                    } else {
                        const usersArray = Object.values(docData);
                        setChatList(usersArray);
                        setNoChat(false);
                    }
                   
                }
                
                else{
                    setNoChat(true)
                }
                // console.log(noChat)
            } catch (error) {
                console.log("Error fetching document:", error.message);
            }
        }
        fetchData()
    },[chatList])
    
    const chatOnClick=(i)=>{
        const combinedUID = user.uid > chatList[i].uid ? user.uid + chatList[i].uid : chatList[i].uid + user.uid
        navigate("/chat",{state:{uid: chatList[i].uid, username: chatList[i].username,currentUsername: user.username, currentUseruid: user.uid, combinedUID: combinedUID}})

    }
    return (
        <div className="chatroom-cont">
            <div className="greetings-cont">
                {user.username != null ? <h2>Hi {user.username}</h2> : <h2>Hi</h2>}
                <h1>Welcome Back!</h1>
            </div>
            <div className="search-cont">
                <div className="search-cont-inner">
                    <Userinput
                        type="text"
                        placeholder="search contact"
                        name="search"
                        value={search}
                        onChange={onChange}
                    />
                    <button onClick={searchUser}>Search</button>

                </div>

                {searchedUserName && searchedUserName.map((users, index) => (
                    <div key={users.uid} onClick={() => { onClick(index) }} className="searched-contact"><span><img src={profile} /></span><span className="username">{users.username}</span></div>
                ))}
                {userFound === false && <p className="userNotFound">User Not Found 🤔</p>}
                <div className="chat-cont">
                    <h1>Chats</h1>
                    <ul>
                    
                        {chatList && chatList.map((users, index) => (
                            <li key={users.uid} onClick={() => {chatOnClick(index)}}><span><img src={profile} /></span><span className="username">{users.username}</span></li>
                        ))}
                        {noChat === true && <p className="nochat">No chat 🥲</p>}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Chatroom;