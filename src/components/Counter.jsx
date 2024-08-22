import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/store";

const Counter = () => {
	const count = useSelector((state) => state);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Counter: {count}</h1>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
};

export default Counter;
