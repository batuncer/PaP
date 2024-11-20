import React, { useState } from "react";


const Postview = ({ user, time, des, avatar, postimage, postvideo, id }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setActive] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
    const toggleActive = () => setActive(!isActive);

    const menuClass = isOpen ? " show" : "";
    const emojiClass =isActive ? " active" : "";

    return(
        <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
        <div className="card-body p-0 d-flex">
            <figure className="avatar me-3">
                <img 
                    src={`assets/images/${avatar}`} 
                    alt="avatar" 
                    className="shadow-sm rounded-circle w45" 
                />
            </figure>
            <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                {user} 
                <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">{time}</span>
            </h4>
            <div className="ms-auto pointer">
                <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
            </div>
        </div>

        {postvideo && (
            <div className="card-body p-0 mb-3 rounded-3 overflow-hidden uttam-die">
                <a href="/defaultvideo" className="video-btn">
                    <video autoPlay loop className="float-right w-100">
                        <source src={`assets/images/${postvideo}`} type="video/mp4" />
                    </video>
                </a>
            </div>
        )}

        <div className="card-body p-0 me-lg-5">
            <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
                {des} 
                <a href="/defaultvideo" className="fw-600 text-primary ms-2">See more</a>
            </p>
        </div>

        {postimage && (
            <div className="card-body d-block p-0 mb-3">
                <div className="row ps-2 pe-2">
                    <div className="col-sm-12 p-1">
                        <img 
                            src={`assets/images/${postimage}`} 
                            className="rounded-3 w-100" 
                            alt="post" 
                        />
                    </div>
                </div>
            </div>
        )}

        <div className="card-body d-flex p-0">
            <div 
                className="emoji-bttn pointer d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2" 
                onClick={toggleActive}
            >
                <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> 
                <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                2.8K Like
            </div>

            <div className={`emoji-wrap pointer ${emojiClass}`}>
                <ul className="emojis list-inline mb-0">
                    <li className="emoji list-inline-item"><i className="em em---1"></i></li>
                    <li className="emoji list-inline-item"><i className="em em-angry"></i></li>
                    <li className="emoji list-inline-item"><i className="em em-anguished"></i></li>
                    <li className="emoji list-inline-item"><i className="em em-astonished"></i></li>
                    <li className="emoji list-inline-item"><i className="em em-blush"></i></li>
                    <li className="emoji list-inline-item"><i className="em em-clap"></i></li>
                    <li className="emoji list-inline-item"><i className="em em-cry"></i></li>
                    <li className="emoji list-inline-item"><i className="em em-full_moon_with_face"></i></li>
                </ul>
            </div>

            <a 
                href="/defaultvideo" 
                className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
            >
                <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
                <span className="d-none-xss">22 Comment</span>
            </a>

            <div 
                className={`pointer ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss ${menuClass}`} 
                id={`dropdownMenu${id}`} 
                data-bs-toggle="dropdown" 
                aria-expanded="false" 
                onClick={toggleOpen}
            >
                <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i>
                <span className="d-none-xs">Share</span>
            </div>
        </div>
    </div>

    )
}

export default Postview;