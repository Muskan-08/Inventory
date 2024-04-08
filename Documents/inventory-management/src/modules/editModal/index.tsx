//@ts-nocheck
import { useSelector } from "react-redux";
import ModalBox from "../../components/modal";
import { EditForm } from "../editForm";
import { useDispatch } from "react-redux";
import { inventoryActions } from "../../redux/inventoryStates/slice";

export const EditModal = () => {
    const dispatch = useDispatch();
	const { selectedItem, modalOpen } = useSelector(
		(state: any) => state.inventory,
	);
    const { toggleModal, updateData, filterCounts } = inventoryActions;
	return (
		<ModalBox
			isModalOpen={modalOpen}
			content={<EditForm />}
			title={
				<div>
					Edit Product - <span>{selectedItem?.name}</span>
				</div>
			}
            handleCancel={() => dispatch(toggleModal(false))}
            handleOk={() => {
                dispatch(updateData())
                dispatch(filterCounts());
            }}
		/>
	);
};
