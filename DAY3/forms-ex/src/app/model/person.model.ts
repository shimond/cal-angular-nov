export interface Person {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
    age: number;
    hobbies?: Hobbie[];
}

export interface Hobbie {
    name: string;
    rating: 1 | 2 | 3;
}