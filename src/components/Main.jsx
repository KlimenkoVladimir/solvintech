import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from "../fetchUsers";
import { setUserPopup, clearUserPopup } from "../userPopup.slice";
import styles from "../styles/Main.module.css";

const Main = () => {
  const dispatch = useDispatch();
  const { users, start, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchUsers(start));
  };

  const handleUserClick = (user) => {
    dispatch(setUserPopup(user));
  };

  return (
    <div className={styles.main}>
      <div className={styles.users}>
        {users.length > 0 &&
          users.map((user) => (
            <button
              key={user.id}
              className={styles.user}
              onClick={() => handleUserClick(user)}
            >
              <img className={styles.photo} src={user.picture} alt="" />
              <div className={styles.userInfo}>
                <div className={styles.infoRow}>
                  <p className={styles.infoKey}>name: </p>
                  <p className={styles.infoProperty}>{user.name}</p>
                </div>
                <div className={styles.infoRow}>
                  <p className={styles.infoKey}>email:</p>
                  <p className={styles.infoProperty}>{user.email}</p>
                </div>
              </div>
            </button>
          ))}
      </div>
      {start < 10 && (
        <button className={styles.button} onClick={handleLoadMore}>
          {loading ? "Loading..." : "Load more..."}
        </button>
      )}
    </div>
  );
};

export default Main;
