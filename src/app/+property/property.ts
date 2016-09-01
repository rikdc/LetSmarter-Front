export class Tenant {
}

export class Lease {
    
}

export class Property {
    id: number;
    addressLine1: string;

    tenants: Tenant[];

    numberOfBathrooms: number;
    numberOfBedrooms: number;
    
}