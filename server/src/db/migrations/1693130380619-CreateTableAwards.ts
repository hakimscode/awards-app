import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAwards1693130380619 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE awards (
        id bigserial PRIMARY KEY,
        name varchar NOT NULL,
        type varchar NOT NULL,
        required_point bigint NOT NULL,
        created_at timestamptz NOT NULL DEFAULT (now())
        );`,
    );

    await queryRunner.query('CREATE INDEX ON awards ("type");');
    await queryRunner.query('CREATE INDEX ON awards ("required_point");');

    await queryRunner.query(
      `INSERT INTO awards (
        "name", "type", "required_point"
      ) VALUES ('Gift Card IDR 1.000.000', 'Vouchers', 500000)`,
    );
    await queryRunner.query(
      `INSERT INTO awards (
        name, type, required_point
      ) VALUES ('Gift Card IDR 500.000', 'Vouchers', 250000)`,
    );
    await queryRunner.query(
      `INSERT INTO awards (
        name, type, required_point
      ) VALUES ('Old Fashion Cake', 'Products', 100000)`,
    );
    await queryRunner.query(
      `INSERT INTO awards (
        "name", "type", "required_point"
      ) VALUES ('Gift Card IDR 1.000.000', 'Vouchers', 500000)`,
    );
    await queryRunner.query(
      `INSERT INTO awards (
        name, type, required_point
      ) VALUES ('Gift Card IDR 500.000', 'Vouchers', 250000)`,
    );
    await queryRunner.query(
      `INSERT INTO awards (
        name, type, required_point
      ) VALUES ('Old Fashion Cake', 'Products', 100000)`,
    );
    await queryRunner.query(
      `INSERT INTO awards (
        "name", "type", "required_point"
      ) VALUES ('Gift Card IDR 1.000.000', 'Vouchers', 500000)`,
    );
    await queryRunner.query(
      `INSERT INTO awards (
        name, type, required_point
      ) VALUES ('Gift Card IDR 500.000', 'Vouchers', 250000)`,
    );
    await queryRunner.query(
      `INSERT INTO awards (
        name, type, required_point
      ) VALUES ('Old Fashion Cake', 'Products', 100000)`,
    );
    await queryRunner.query(
      `INSERT INTO awards (
        name, type, required_point
      ) VALUES ('Old Fashion Cake', 'Products', 100000)`,
    );
    await queryRunner.query(
      `INSERT INTO awards (
        name, type, required_point
      ) VALUES ('Old Fashion Cake', 'Products', 100000)`,
    );
    await queryRunner.query(
      `INSERT INTO awards (
        name, type, required_point
      ) VALUES ('Old Fashion Cake', 'Products', 100000)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('DELETE FROM awards');
    await queryRunner.dropTable('awards');
  }
}
