import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import { CustomInputContainer, InputErrorMessageContainer } from './styles';

interface ICustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
	hasError?: boolean;
	helpertext?: string;
}

const CustomInput: FunctionComponent<ICustomInputProps> = React.forwardRef(
	(props, ref) => {
		return (
			<>
				<CustomInputContainer {...props} ref={ref as any} />;
				<InputErrorMessageContainer>{props?.helpertext}</InputErrorMessageContainer>
			</>
		)

	}
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
