import { setUsers, increaseStart, setLoading, setError } from "./users.slice";
import { useSelector } from "react-redux";
import axios from "axios";

// `https://jsonplaceholder.typicode.com/users?_start=${start}&_limit=4`

const fetchUsers =
  (start = 0) =>
  async (dispatch) => {
    console.log(start);

    dispatch(setLoading(true));

    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://layout.solvintech.ru/nuxt/api`
      );
      const data = response.data.slice(start, start + 4);

      dispatch(setUsers(data));
      dispatch(increaseStart());
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export default fetchUsers;
