import React from "react";
import { Table } from "antd";
import { GridProps } from "./type";

const Grid = ({ columns, data }: GridProps) => (
	<Table columns={columns} dataSource={data} rowHoverable={false} pagination={false}/>
);

export default Grid;
