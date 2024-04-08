import { SwitchSize } from "antd/es/switch";

export interface SwitchProps {
	onChange?: (event: any) => void;
	size?: SwitchSize | any;
	checked?: boolean;
	props?: { [key: string]: any };
}
