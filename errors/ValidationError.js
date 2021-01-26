class ValidationError extends Error {
    constructor(args) {
        super(args)
        this.code = "VALIDATION_ERROR";
        this.msg = args;
    }
}

module.exports = ValidationError;