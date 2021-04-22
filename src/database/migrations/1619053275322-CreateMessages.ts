import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619053275322 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "messages",
                columns:[{
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },{
                    name: "admin_id",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "user_id",
                    type: "varchar",
                    isNullable: true
                    
                },
                {
                    name: "text",
                    type: "varchar"
                },{
                    name: "created_at",
                    type:  "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "FKUser",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames:["user_id"],
                    onDelete: "SET  NULL",
                    onUpdate: "SET NULL"
                }
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
