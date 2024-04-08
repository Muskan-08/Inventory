import {
	DeleteOutlined,
	EyeOutlined,
	EditOutlined,
	EyeInvisibleOutlined,
} from "@ant-design/icons";
import store from "../../redux/store";
import { inventoryActions } from "../../redux/inventoryStates/slice";

const { changeDisable, filterCounts, deleteItem, editItem, toggleModal } = inventoryActions;

export const ITEM_COLUMNS = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Category",
		dataIndex: "category",
		key: "category",
	},
	{
		title: "Price",
		dataIndex: "price",
		key: "price",
	},
	{
		title: "Quantity",
		dataIndex: "quantity",
		key: "quantity",
	},
	{
		title: "Value",
		dataIndex: "value",
		key: "value",
	},
	{
		title: "Action",
		dataIndex: "action",
		key: "action",
		render: (item: any, row: any) => {
			return (
				<div className="tableActions">
					<span onClick={() => {
						store.dispatch(editItem(row));
						store.dispatch(toggleModal(true));
					}}>
						{store.getState().inventory.isAdmin && <EditOutlined />}
					</span>
					<span
						onClick={() => {
							store.dispatch(
								changeDisable({
									value: !row?.isDisabled,
									key: row?.key,
								}),
							);
                            store.dispatch(filterCounts());
						}}
					>
						{store.getState().inventory.isAdmin && (!row?.isDisabled ? (
							<EyeOutlined />
						) : (
							<EyeInvisibleOutlined />
						))}
					</span>
					<span onClick={() => {
						store.dispatch(deleteItem(row.key));
						store.dispatch(filterCounts())
						}}>
						{store.getState().inventory.isAdmin && (
							<DeleteOutlined />
						)}
					</span>
					{!store.getState().inventory.isAdmin && "N/A"}
				</div>
			);
		},
	},
];

export const DATA = [
	{
		key: "1",
		name: "John Brown",
		category: 32,
		price: "New York No. 1 Lake Park",
		quantity: ["nice", "developer"],
		value: "New York No. 1 Lake Park",
	},
	{
		key: "2",
		name: "Jim Green",
		category: 42,
		price: "London No. 1 Lake Park",
		quantity: ["loser"],
		value: "New York No. 1 Lake Park",
	},
];
