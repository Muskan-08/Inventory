import { useSelector } from "react-redux";
import { SwitchInput } from "../../components/switch";
import { HeaderWrapper } from "./style";
import {LogoutOutlined} from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { inventoryActions } from "../../redux/inventoryStates/slice";

export const Header = () => {
    const {isAdmin} = useSelector((state: any) => state.inventory);
    const dispatch = useDispatch();
    const {toggleUser} = inventoryActions;
	const handleChange = (e: any) => {
		dispatch(toggleUser(e))
	};
	return (
		<HeaderWrapper>
			<div className="userDiv">
            <span className="userText">User</span>
			<SwitchInput onChange={handleChange} size="small" checked={isAdmin} />
			<span className="adminText">Admin</span>
            </div>
            <LogoutOutlined />
		</HeaderWrapper>
	);
};
