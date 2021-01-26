class EarnNotFoundError extends Error {
    constructor(args) {
        super(args)
        this.code = "EARN_NOT_FOUND_ERROR";
        this.msg = args != null ? args : "Earn not found!";
    }
}

module.exports = EarnNotFoundError;