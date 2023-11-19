// jsonResponse.js
const { StatusCode } = require('status-code-enum')


// jsonApiResponse.js
class JSONAPIResponse {

    static success(res, data, sCode = StatusCode.SuccessOK,success = true) {


        let response = {
            success,
            data,
        }

        res.status(sCode).json(response);
    }


    static error(res, message, sCode = StatusCode.ServerErrorInternal) {


            let response = {
                success: false,
                error: {
                    message: message || "Internal Server Error!",
                }
            }

        res.status(sCode).json(response);

    }


}

module.exports = JSONAPIResponse;
