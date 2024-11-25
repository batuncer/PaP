import React, { useState, useCallback } from "react";
import { useDispatch, useAppSelector } from "../redux/store";
import { createPost } from "../redux/slices/postSlice";

const CreatePost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const { currentUser } = useAppSelector((state) => state.user);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim()) {
      setErrorMessage("Content cannot be empty.");
      return;
    }

    if (!currentUser?.name) {
      setErrorMessage("Author information is missing.");
      return;
    }

    const newPost = {
      content,
      image,
      authorName: currentUser.name,
      createdAt: new Date().toISOString(),
      comments: [],
      likes: 0,
    };

    dispatch(createPost(newPost));
    setContent("");
    setImage(null);
    setErrorMessage(null);
  };

  if (!currentUser) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
      <div className="card-body p-0">
        <a
          href="/"
          className="font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"
        >
          <i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"></i>
          Create Post
        </a>
      </div>

      <div className="card-body p-0 mt-3 position-relative">
        <figure className="avatar position-absolute ms-2 mt-1 top-5">
          <img
            src={currentUser?.authorProfile || "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg"}
            alt={currentUser?.name || "User"}
            className="shadow-sm rounded-circle w30"
          />
        </figure>

        <textarea
          name="message"
          className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
          cols="30"
          rows="10"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      {errorMessage && (
        <div className="error-message text-danger">{errorMessage}</div>
      )}

      <div className="card-body d-flex p-0 mt-0">
        <label
          htmlFor="image-upload"
          className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4 pointer"
        >
          <i className="font-md text-success feather-image me-2"></i>
          <span className="d-none-xs">Add Photo</span>
        </label>
        <input
          type="file"
          id="image-upload"
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleImageUpload}
        />
        {image && (
          <div className="image-preview mt-2">
            <img
              src={image}
              alt="Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
        )}

        <div
          className={`ms-auto pointer ${isOpen ? "show" : ""}`}
          id="dropdownMenu4"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={toggleOpen}
        >
          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
        </div>
      </div>

      <div className="card-body p-0 mt-3">
        <button
          className="btn btn-primary w-100 rounded-xxl"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
