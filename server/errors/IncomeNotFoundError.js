class IncomeNotFoundError extends Error {
    constructor(args) {
        super(args)
        this.code = "INCOME_NOT_FOUND_ERROR";
        this.msg = args != null ? args : "Income not found!";
    }
}

module.exports = IncomeNotFoundError;