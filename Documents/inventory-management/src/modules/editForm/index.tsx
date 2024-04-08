import { Input } from "antd";
import { useSelector } from "react-redux";
import { inventoryActions } from "../../redux/inventoryStates/slice";
import { useDispatch } from "react-redux";

export const EditForm = () => {
	const dispatch = useDispatch();
	const { selectedItem } = useSelector((state: any) => state.inventory);
	const { setSelectedItem } = inventoryActions;
	return (
		<>
			<span>
				<p>category</p>
				<Input
					placeholder="category"
					value={selectedItem?.category}
					onChange={(e) =>
						dispatch(
							setSelectedItem({
								label: "category",
								value: e.target.value,
							}),
						)
					}
				></Input>
			</span>
			<span>
				<p>price</p>
				<Input
					placeholder="price"
					value={selectedItem?.price}
					onChange={(e) =>
						dispatch(
							setSelectedItem({
								label: "price",
								value: e.target.value,
							}),
						)
					}
				></Input>
			</span>
			<span>
				<p>quantity</p>
				<Input
					placeholder="quantity"
					value={selectedItem?.quantity}
					onChange={(e) =>
						dispatch(
							setSelectedItem({
								label: "quantity",
								value: e.target.value,
							}),
						)
					}
				></Input>
			</span>
			<span>
				<p>value</p>
				<Input
					placeholder="value"
					value={selectedItem?.value}
					onChange={(e) =>
						dispatch(
							setSelectedItem({
								label: "value",
								value: e.target.value,
							}),
						)
					}
				></Input>
			</span>
		</>
	);
};
