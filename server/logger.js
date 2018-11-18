const { createLogger, format, transports } = require('winston');

const level = process.env.LOG_LEVEL || 'debug';

const logger = createLogger({
    format: format.combine(
        format.splat(),
        format.colorize(),
        format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.Console({level: level})
    ]
});

module.exports = logger