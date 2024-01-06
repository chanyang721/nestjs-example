import { IsEnum, IsNotEmpty, IsString }                                from "class-validator";
import { Column, Entity, Generated, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity }                                                  from "../../../../libs/database/orm/typeorm/base/base.entity";
import { Account }                                          from "../../wallets/entities/account.entity";
import { ApplicationContractForm }                          from "./application.contract.form.entity";
import { ApplicationDappForm }                              from "./application.dapp.form.entity";
import { ApplicationFromProcessLog }                        from "./application.from.process.log.entity";
import { APPLICATION_PROCESS_STATUS }                       from "./enums";



@Entity( { name: "application_form" } )
export class ApplicationForm extends BaseEntity {
    /*
     * Columns
     * */
    @IsEnum(APPLICATION_PROCESS_STATUS)
    @IsNotEmpty()
    @Column( {
        type   : "enum",
        enum   : APPLICATION_PROCESS_STATUS,
        default: APPLICATION_PROCESS_STATUS.APPLY,
        comment: "신청서 진행 상태"
    } )
    process_status: APPLICATION_PROCESS_STATUS;

    @Column( { unique: true, comment: "신청서 번호, ex) 00001" } )
    application_form_number: number;

    // @Column( { comment: "약관 동의 여부" } )
    // terms_agreement: boolean;


    /*
     * FK Columns
     * */
    @Column()
    application_dapp_form_id: string;

    @Column()
    account_id: string

    /*
     * Relations
     * */
    @OneToMany( () => ApplicationFromProcessLog, application_from_process_log => application_from_process_log.application_form )
    application_from_process_logs: ApplicationFromProcessLog[];

    @OneToMany( () => ApplicationContractForm, application_contract_form => application_contract_form.application_form )
    application_contract_forms: ApplicationContractForm[];

    @ManyToOne( () => ApplicationDappForm )
    @JoinColumn( { name: "application_dapp_form_id" } )
    application_dapp_form: ApplicationDappForm;

    @ManyToOne(() => Account)
    @JoinColumn({ name: 'account_id' })
    account: Account
}