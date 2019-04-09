export class CompanyDetails {
    name: string;
    address: string;
    contactNumber: number;
    isActive: boolean;
    email:string;
    constructor(name: string, address: string,contactNumber:number,email:string,isActive:boolean) {
        this.name = name;
        this.address = address;
        this.contactNumber = contactNumber;
        this.email=email;
        this.isActive=isActive;
    }
}