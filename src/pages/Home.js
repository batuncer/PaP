import React, { Fragment, useEffect, useState, useContext } from "react";
import axios from "axios";
import Header from "../components/Header";
import Appfooter from "../components/Appfooter";
import AuthContext from "../auth/AuthProvider";
import { getPosts } from "../redux/slices/postSlice";
import { useDispatch, useSelector } from "../redux/store";
import CreatePost from "../components/Createpost";
import Postview from "../components/Postview";

export default function Home() {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/users/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUser(response.data);
      } catch (err) {
        console.log("Error", err);
        setErrorMessage("Failed to fetch user details");
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {

  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left">
            <div className="row feed-body">
              <div className="col-xl-8 col-xxl-9 col-lg-8">
                <CreatePost />
                <Postview />
              </div>
              <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
                {/* Sidebar components here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Appfooter />
    </Fragment>
  );
}
