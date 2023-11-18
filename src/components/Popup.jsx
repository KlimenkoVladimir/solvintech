import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Popup.module.css";
import { setUserPopup, clearUserPopup } from "../userPopup.slice";
import close from "../close.svg";

const Popup = () => {
  const dispatch = useDispatch();
  const handleClosePopup = () => {
    dispatch(clearUserPopup());
  };
  const selectedUser = useSelector((state) => state.userPopup.selectedUser);

  console.log(selectedUser);

  return (
    <>
      {selectedUser && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <img className={styles.photo} src={selectedUser.picture} alt="" />
            <div className={styles.userInfo}>
              <div className={styles.infoRow}>
                <p className={styles.infoKey}>name: </p>
                <p className={styles.infoProperty}>{selectedUser.name}</p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.infoKey}>age: </p>
                <p className={styles.infoProperty}>{selectedUser.age}</p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.infoKey}>email: </p>
                <p className={styles.infoProperty}>{selectedUser.email}</p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.infoKey}>phone: </p>
                <p className={styles.infoProperty}>{selectedUser.phone}</p>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.infoKey}>about: </p>
                <p className={styles.infoProperty}>{selectedUser.about}</p>
              </div>
              <button className={styles.closeButton} onClick={handleClosePopup}>
                <img src={close} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
