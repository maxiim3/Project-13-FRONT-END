import PropTypes from "prop-types"

export const InputPropType = PropTypes.shape({
												 label: PropTypes.string.isRequired,
												 slug: PropTypes.string.isRequired,
												 inputType: PropTypes.oneOf(["text", "password", "email", "number", "checkbox"]).isRequired,
												 minLength: PropTypes.number.isRequired,
												 isValid: PropTypes.bool.isRequired,
												 inputValue: PropTypes.string.isRequired,
												 id: PropTypes.string.isRequired,
												 response: PropTypes.shape({
																			   status: PropTypes.oneOf(["success", "error", "none"]).isRequired,
																			   message: PropTypes.string.isRequired,
																		   }).isRequired,
												 placeholder: PropTypes.string.isRequired,
												 setValue: PropTypes.func.isRequired,
												 setIsValid: PropTypes.func.isRequired,
												 setResponse: PropTypes.func.isRequired,
												 setPlaceholder: PropTypes.func.isRequired,
											 })