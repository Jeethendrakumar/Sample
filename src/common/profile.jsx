import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faSkype,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      className="rounded-circle img-fluid"
                      style={{ width: "100px" }}
                    />
                  </div>
                  <h4 className="mb-2">Jeethendrakumar Chandrasekaran</h4>
                  <p className="text-muted mb-4">
                    @Programmer <span className="mx-2">|</span>{" "}
                    <a href="#!">www.jeethwebsite.com</a>
                  </p>
                  <div className="mb-4 pb-2">
                    <a
                      target="_blank"
                      href="https://jeppiaarcollege.org/jeppiaar/"
                      className="btn btn-outline-primary"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    {"   "}
                    <button type="button" className="btn btn-outline-pink">
                      <FontAwesomeIcon icon={faInstagram} />
                    </button>
                    {"   "}
                    <button type="button" className="btn btn-outline-success">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </button>
                  </div>
                  <button type="button" className="btn btn-info btn-lg">
                    Message now
                  </button>
                  <div className="d-flex justify-content-between text-center mt-5 mb-2">
                    <div>
                      <p className="mb-2 h5">8471</p>
                      <p className="text-muted mb-0">Wallets Balance</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-2 h5">8512</p>
                      <p className="text-muted mb-0">Income amounts</p>
                    </div>
                    <div>
                      <p className="mb-2 h5">4751</p>
                      <p className="text-muted mb-0">Total Transactions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
