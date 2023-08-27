import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUsers1692948698911 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE users (
        id bigserial PRIMARY KEY,
        email varchar NOT NULL,
        created_at timestamptz NOT NULL DEFAULT (now())
      );`,
    );

    await queryRunner.query('CREATE INDEX ON users ("email");');

    await queryRunner.query(
      `INSERT INTO users ("email") VALUES ('user@gmail.com')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('DELETE FROM users');
    await queryRunner.dropTable('users');
  }
}
