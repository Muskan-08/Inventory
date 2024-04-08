import { useDispatch } from "react-redux";
import { Header } from "../../modules/header"
import { ItemTable } from "../../modules/list"
import Stats from "../../modules/stats"
import { useEffect } from "react";
import { getList } from "../../redux/inventoryStates/api";
import { LIST_URL } from "../../services/endpoint";
import { EditModal } from "../../modules/editModal";
import { useSelector } from "react-redux";

export const InventoryLayout = () => {
    const { modalOpen } = useSelector((state: any) => state.inventory);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getList({endpoint: LIST_URL}));
    },[])
    return(
        <>
        <Header />
        <Stats />
        <ItemTable />
        {modalOpen && <EditModal />}
        </>
    )
}