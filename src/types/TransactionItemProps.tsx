import PropTypes from "prop-types"

export const TransactionItemProps = PropTypes.shape({
														accountLabel: PropTypes.string.isRequired,
														balance: PropTypes.number.isRequired,
														date: PropTypes.string.isRequired,
														transactionType: PropTypes.string.isRequired,
														transactionAmount: PropTypes.number.isRequired,
													})