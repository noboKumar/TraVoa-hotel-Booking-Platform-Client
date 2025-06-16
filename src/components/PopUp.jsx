import React, { useEffect } from "react";
import popUpImage from "../assets/special-offer-modal.jpg";
const PopUp = () => {
  useEffect(() => {
    const popUpModal = document.getElementById("offer_modal");
    if (popUpModal) {
      popUpModal.showModal();
      sessionStorage.setItem("popUpShown", "true");
    }
  }, []);
  return (
    <div>
      <dialog id="offer_modal" className="modal">
        <div className="modal-box p-0">
          <form method="dialog">
            <button className="btn btn-sm btn-circle text-xl absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img src={popUpImage} alt="offer image" />
        </div>
      </dialog>
    </div>
  );
};

export default PopUp;
