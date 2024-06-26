import styled from "styled-components";

export const ItemTableWrapper =  styled.div`
margin: 15px;
.ant-table-cell{ 
color: white;
}
.ant-table-thead, .ant-table-tbody{
    .ant-table-cell{
        background-color: #2e384d;
        border: 0;
    }
    :before{
        display: none;
    }
}
.ant-table-thead{
    .ant-table-cell{
        color: #b7e598;
    }
}
.tableActions > span{
    margin: 10px;
    cursor: pointer;
}
`;