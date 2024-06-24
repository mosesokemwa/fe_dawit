export class Logger {
  log(msg: unknown, ...optionalParams: unknown[]) { console.log(msg, ...optionalParams); }
  error(msg: unknown, ...optionalParams: unknown[]) { console.log(msg, ...optionalParams); }
  warn(msg: unknown, ...optionalParams: unknown[]) { console.log(msg, ...optionalParams); }
}
