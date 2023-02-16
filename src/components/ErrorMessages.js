import { ErrorMessage } from "@hookform/error-message";

const ErrorMessages = ({errors, input}) => {
	return (
		<ErrorMessage
			errors={errors}
			name={input}
			render={({ messages }) => {
				return messages
					? Object.entries(messages).map(([type, message]) => (
							<p key={type} className="error-message">
								{message}{" "}
							</p>
					  ))
					: null;
			}}
		/>
	);
};

export default ErrorMessages;
