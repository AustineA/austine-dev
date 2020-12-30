import { proxy } from "valtio";

const store = proxy({
  darkMode: false,
});

export default store;
