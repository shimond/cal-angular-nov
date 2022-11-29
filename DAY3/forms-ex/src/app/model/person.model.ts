export interface Person {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
    age: number;
    workAddress: Address;
    homeAddress: Address;
    hobbies?: Hobbie[];
}

export interface Address {
    country: string;
    city: string;
}
export interface Hobbie {
    name: string;
    rating: 1 | 2 | 3;
}