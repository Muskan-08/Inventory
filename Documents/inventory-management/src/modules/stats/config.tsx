import {ShoppingCartOutlined, DollarOutlined, ProductOutlined, CloseSquareOutlined} from '@ant-design/icons';
import store from '../../redux/store';

export const getStatsColumn = (state: any) => {
    const STATS_DATA = [
        {
            title: "Total Products",
            value: state.totalProduct,
            icon: <ShoppingCartOutlined />
        },
        {
            title: "Total Store Value",
            value: state.totalStoreValue,
            icon: <DollarOutlined />
        },
        {
            title: "Out Of Stocks",
            value: state.totalStockOut,
            icon: <CloseSquareOutlined /> 
        },
        {
            title: "No Of Category",
            value: state.totalCategory,
            icon: <ProductOutlined />
        }
    ];
    return STATS_DATA;
}