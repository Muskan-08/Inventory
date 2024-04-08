import { SwitchWrapper } from "./style";
import { SwitchProps } from "./type";
import { Switch } from "antd";

export const SwitchInput = ({
	onChange,
	size,
	checked,
	props,
}: SwitchProps) => (
	<SwitchWrapper>
		<Switch
			defaultChecked
			onChange={onChange}
			size={size}
			checked={checked}
			{...props}
		/>
	</SwitchWrapper>
);
