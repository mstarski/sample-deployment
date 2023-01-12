export class RedisConnectionError extends Error {
  super(err: Error) {
    this.message = "Connection to Redis failed." + err.message;
  }
}
