import "../../styles/flashMessages.css";

const FlashMessages = () => {
  return (
    <div className="perantContainer">
      {/* //*Sucess message */}
      <div>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-success m-4"
          data-bs-toggle="modal"
          data-bs-target="#SuccessModal"
        >
          Success
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade "
          id="SuccessModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="SuccessModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content successMessage">
              <div className="modal-header">
                <h1
                  className="modal-title text-center fs-5"
                  id="SuccessModalLabel"
                >
                  Success!
                </h1>
                <button
                  type="button"
                  className="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                No hickups, all files were downloaded.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //! Failed message */}
      <div>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-danger m-4"
          data-bs-toggle="modal"
          data-bs-target="#FailedModal"
        >
          Failed
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="FailedModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="FailedModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content failedMessageBg">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="FailedModalLabel">
                  Ooops! Something went wong...
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <div>Something went wrong!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashMessages;
