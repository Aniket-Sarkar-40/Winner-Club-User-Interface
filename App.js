import { Provider } from "react-redux";
import Main from "./Main";
import store from "./redux/store";
import Toast from "react-native-toast-message";
import "react-native-gesture-handler";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
      <Toast />
    </Provider>
  );
}
