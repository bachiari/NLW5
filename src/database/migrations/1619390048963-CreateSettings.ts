import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1619390048963 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { //run - executar a migration
        await queryRunner.createTable(
            new Table({
               name: "settings",
               columns: [
                   {
                       name: "id",
                       type: "uuid",
                       isPrimary: true
                   },
                   {
                       name: "username",
                       type: "varchar"
                   },
                   {
                       name: "chat",
                       type: "boolean",
                       default: true
                   },
                   {
                       name: "updated_at",
                       type: "timestamp",
                       default: "now()"
                   },
                   {
                       name: "created_at",
                       type: "timestamp",
                       default: "now()"
                   }
               ] 
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> { //revert migration
        await queryRunner.dropTable("settings")
    }

}
