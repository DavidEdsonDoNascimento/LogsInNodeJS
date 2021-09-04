import pino, { LoggerOptions } from 'pino';

const settings: LoggerOptions = {
    level: 'debug',
    prettyPrint:{
        levelFirst: true,
        colorize: true
    }
};
export default pino(settings);