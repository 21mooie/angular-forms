import { getTypeNameForDebugging } from "../../../node_modules/@angular/common/src/directives/ng_for_of";

export class Employee{
    constructor(
        public firstName: string,
        public lastName: string,
        public isFullTime: boolean,
        public paymentType: string,
        public primaryLanguage: string
    ){

    }
}