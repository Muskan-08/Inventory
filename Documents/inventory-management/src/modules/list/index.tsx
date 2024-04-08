import { useSelector } from "react-redux"
import Grid from "../../components/table"
import { DATA, ITEM_COLUMNS } from "./config"
import { ItemTableWrapper } from "./style"

export const ItemTable = () => {
    const {listData} = useSelector((state: any) => state.inventory);
    return(
        <ItemTableWrapper>
            <Grid columns={ITEM_COLUMNS} data={listData}/>
        </ItemTableWrapper>
    )
}