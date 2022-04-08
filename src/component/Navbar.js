import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";

import '../css/Navbar.css';
import { Avatar, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import { ExpandMore, Link } from "@material-ui/icons";
import firebase from 'firebase/compat/app';
import Modal from "react-modal";


Modal.setAppElement("#root");

function Navbar() {
    const user = useSelector(selectUser);

    const [IsmodalOpen, setIsModalOpen] = useState(false);
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    const questionName = input;

    const handleQuestion = (e) => {
        e.preventDefault();
        setIsModalOpen(false);

        if (questionName) {
        db.collection("questions").add({
            user: user,
            question: input,
            imageUrl: inputUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        }

        setInput("");
        setInputUrl("");
    };

    return (
        <div className="qHeader">
            
            <div className="qHeader_logo">
                <img 
                    src = 'https://png2.cleanpng.com/sh/a1414bfe09e92aab8c95c09ad280501d/L0KzQYm3VMI5N5pwfZH0aYP2gLBuTflvfJZ3htd9LXbygsb0TfNwdaF6jNd7LXnmf7B6Tf9vdJpzfZ9saHH3PYbohcQ2O2oAfagENUO5Poq7UMIzQGQASac7NEm0Q4G7Wck1PGYziNDw/kisspng-internet-forum-computer-icons-online-chat-5ae45399e69536.9402283915249130499445.png'
                    alt="logo"
                />
            </div>
            
            <div className="qHeader_icons">
            
                <div className="qHeader_icon">
                    <HomeIcon />
                </div>

                <div className="qHeader_icon">
                    <FeaturedPlayListOutlinedIcon />
                </div>

               

                <div className="qHeader_icon">
                    <PeopleAltOutlinedIcon />
                </div>

                <div className="qHeader_icon">
                    <NotificationsOutlinedIcon />
                </div>
            
            </div>
             {/*
            <div className="qHeader_input">
               <SearchIcon /> 
                <input type="text" placeholder="Search Questions" /> 
            </div>*/}
            <div className="qHeader_Rem">
                <div className="qHeader_avatar">
                <Avatar
                    onClick={() => auth.signOut()}
                    className="Avatar"
                    src={
                    user.photo
                        ? user.photo
                        : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
                    }
                /> 
                </div>
                <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
                <Modal
                    isOpen={IsmodalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    shouldCloseOnOverlayClick={false}
                    style={{
                        overlay: {
                        width: 700,
                        height: 600,
                        backgroundColor: "rgba(0,0,0,0.8)",
                        zIndex: "1000",
                        top: "50%",
                        left: "50%",
                        marginTop: "-300px",
                        marginLeft: "-350px",
                        },
                    }}
                    >
                    <div className="modal__title">
                        <h5>Add Question</h5>
                        <h5>Share Link</h5>
                    </div>
                    <div className="modal__info">
                        <Avatar
                        className="avatar"
                        src={
                            user.photo
                            ? user.photo
                            : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
                        }
                        />
                        <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
                        <div className="modal__scope">
                        <PeopleAltOutlinedIcon />
                        <p>Public</p>
                        <ExpandMore />
                        </div>
                    </div>
                    <div className="modal__Field">
                        <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="Start your question with 'What', 'How', 'Why', etc. "
                        />
                        <div className="modal__fieldLink">
                        <Link />
                        <input
                            value={inputUrl}
                            onChange={(e) => setInputUrl(e.target.value)}
                            type="text"
                            placeholder="Optional: inclue a link that gives context"
                        ></input>
                        </div>
                    </div>
                    <div className="modal__buttons">
                        <button className="cancle" onClick={() => setIsModalOpen(false)}>
                        Cancel
                        </button>
                        <button type="sumbit" onClick={handleQuestion} className="add">
                        Add Question
                        </button>
                    </div>
                    </Modal>
            </div>

        </div>
    );
}

export default Navbar;