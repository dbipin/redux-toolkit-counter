import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
	decrementByAmount,
} from "./counterSlice";

const Counter = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	const [incrementAmount, setIncrementAmount] = useState("2");

	return (
		<div>
			<div>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span>{count}</span>
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>

				<input
					type="text"
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button
					aria-label="increment by amount"
					onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
				>
					Add By amount
				</button>
				<button
					aria-label="Decrement By Amount"
					onClick={() => dispatch(decrementByAmount(Number(incrementAmount)))}
				>
					Decreace By Amount
				</button>
			</div>
		</div>
	);
};

export default Counter;
