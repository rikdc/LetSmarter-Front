import { Tenant } from './';

export class Property {
    id: number;
    addressLine1: string;

    tenants: Tenant[];

    numberOfBathrooms: number;
    numberOfBedrooms: number;
    
}


export class Parameter {
    key: string; value: string;
}

export class Widget {
    id: number;
    description: string;
    position: number;
    parameters: Parameter[]
}

