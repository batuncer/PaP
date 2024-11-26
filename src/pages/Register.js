import React, { useState, Fragment } from "react";
import { useAppSelector, useDispatch } from "../redux/store";
import { registerUser } from '../redux/slices/userSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const { loading, error } = useAppSelector((state) => state.user || {});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(registerUser({ name, surname, username, email, password, country, city }));
  };

  return (
    <Fragment>
      <div className="main-wrap">
        
        <div className="nav-header bg-transparent shadow-none border-0">
          <div className="nav-top w-100">
            <a href="/">
              <i className="feather-zap text-success display1-size me-2 ms-0"></i>
              <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                Sociala.
              </span>
            </a>
            <a
              href="/"
              className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
            >
              Login
            </a>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{
              backgroundImage: `url("https://via.placeholder.com/800x950.png")`,
            }}
          ></div>
          <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <div className="card shadow-none border-0 ms-auto me-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size display2-md-size mb-3">
                  Create a new <br />
                  account
                </h2>
                <form onSubmit={handleSubmit}>
                  {error && <p className="text-danger mt-2">{error}</p>}
                  <div className="form-group icon-input mb-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group icon-input mb-3">
                    <input
                      type="text"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Your Surname"
                    />
                  </div>
                  <div className="form-group icon-input mb-3">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Your Username"
                    />
                  </div>
                  <div className="form-group icon-input mb-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group icon-input mb-1">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group icon-input mb-1">
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Your city"
                    />
                  </div>
                  <div className="form-group icon-input mb-1">
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Your Country"
                    />
                  </div>
                  <div className="col-sm-12 p-0 text-left">
                    <button
                      type="submit"
                      className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0"
                      disabled={loading}
                    >
                      {loading ? 'Registering...' : 'Register'}
                    </button>
                    <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                      Already have an account?{" "}
                      <a href="/login" className="fw-700 ms-1">
                        Login
                      </a>
                    </h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
