const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;


const logger = createLogger({
    level: 'info',
    //format: winston.format.json(),
    format: combine(
        // label({ label: 'right meow!' }),
        timestamp(),
        prettyPrint()
      ),
    defaultMeta: { service: 'book-api' },
    transports: [
        new transports.Console({ level: 'error' }),
        new transports.File({ filename: 'error.log', level: 'error' }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: format.simple(),
    }));
}


module.exports = logger