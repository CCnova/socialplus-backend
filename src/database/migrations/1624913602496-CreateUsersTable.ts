import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1624913602496 implements MigrationInterface {
    name = 'CreateUsersTable1624913602496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    { name: 'id', type: 'uuid', isPrimary: true },
                    { name: 'name', type: 'varchar' },
                    { name: 'email', type: 'varchar' },
                    { name: 'cpf', type: 'varchar' },
                    { name: 'balance', type: 'float' },
                    { name: 'level', type: 'float' },
                    { name: 'orders_ids', type: 'varchar[]' },
                    { name: 'instagram_email', type: 'varchar' },
                    { name: 'created_at', type: 'timestamp', default: 'now()' },
                    { name: 'updated_at', type: 'timestamp', default: 'now()' },
                    { name: 'deleted_at', type: 'timestamp', default: 'null' },
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
