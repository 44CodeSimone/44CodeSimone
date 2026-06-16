import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class StructuredLoggerService implements LoggerService {
  log(message: unknown, context?: string): void {
    this.write('log', message, context);
  }

  error(message: unknown, trace?: string, context?: string): void {
    this.write('error', message, context, trace);
  }

  warn(message: unknown, context?: string): void {
    this.write('warn', message, context);
  }

  debug(message: unknown, context?: string): void {
    this.write('debug', message, context);
  }

  verbose(message: unknown, context?: string): void {
    this.write('verbose', message, context);
  }

  private write(
    level: 'log' | 'error' | 'warn' | 'debug' | 'verbose',
    message: unknown,
    context?: string,
    trace?: string
  ): void {
    const payload = {
      timestamp: new Date().toISOString(),
      level,
      context,
      message,
      trace
    };

    // Structured JSON logs for future integration with log aggregators.
    process.stdout.write(`${JSON.stringify(payload)}\n`);
  }
}
