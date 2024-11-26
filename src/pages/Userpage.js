import React, { Fragment } from "react";
import Header from '../components/Header';
import Appfooter from '../components/Appfooter';
import Profiledetail from '../components/Profiledetail';
import CreatePost from "../components/Createpost";
import Postview from "../components/Postview";
import Load from '../components/Load';
import ProfilecardThree from "../components/ProfilecardThree";
import Profilephoto from "../components/Profilephoto";
import { Leftnav } from "../components/Leftnav";
const Userpage = () => {
    return (
        <Fragment> 
            <Header />
            <Leftnav />

            <div className="main-content right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left pe-0">
                        <div className="row">
                            <div className="col-xl-12 mb-3">
                                <ProfilecardThree />
                            </div>
                            <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                                <Profiledetail />
                                <Profilephoto />
                            </div>
                            <div className="col-xl-8 col-xxl-9 col-lg-8">
                                <CreatePost />
                                <Postview 
                                    id="32" 
                                    postvideo="" 
                                    postimage="post.png" 
                                    avater="user.png" 
                                    user="Surfiya Zakir" 
                                    time="22 min ago" 
                                    des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." 
                                />

                                <Load />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Appfooter /> 

        </Fragment>
    );
}

export default Userpage;
