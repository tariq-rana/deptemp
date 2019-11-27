import { DeptEntity } from "src/dept/dept.entity";

export class EmpDTO{
    empName:string;
    mailId:string;
    joinDate:Date;
    dept?:DeptEntity;
}