// jsonResponse.js
const { StatusCode } = require('status-code-enum')


// jsonApiResponse.js
class JSONAPIResponse {

    static success(res, data, sCode = StatusCode.SuccessOK) {


        let response = {
            success: true,
            data: data,
        }

        res.status(sCode).json(response);
    }


    static error(res, message, sCode = StatusCode.ServerErrorInternal) {


            let response = {
                success: false,
                error: {
                    message: message,
                }
            }

        res.status(sCode).json(response);

    }


}

module.exports = JSONAPIResponse;
