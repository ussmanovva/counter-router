import store from "./store/store";
import Counter from "./components/Counter";
import { Provider } from "react-redux";

const App = () => {
	return (
		<Provider store={store}>
			<Counter />
		</Provider>
	);
};

export default App;
