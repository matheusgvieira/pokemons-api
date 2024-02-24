import { Injectable } from '@nestjs/common';
import { HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Injectable()
export class AppService {
  constructor(private health: HealthCheckService, private db: TypeOrmHealthIndicator) {}

  getHello() {
    return "Hello World! I'm a Pokemons API";
  }

  getHealth() {
    return this.health.check([() => this.db.pingCheck('database')]);
  }
}
