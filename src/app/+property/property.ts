export class Tenant {
}

export class Lease {
    
}

export class Expense {
    public id: number;
    public status: string;
    public amount: number;
    public dueDate: Date;
    public paidDate: Date;
    public recipient: string;
    public notes: string;
}

export class Property {
    id: number;
    addressLine1: string;

    tenants: Tenant[];

    numberOfBathrooms: number;
    numberOfBedrooms: number;
    
}