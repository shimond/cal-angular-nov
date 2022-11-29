export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface NotificationModel {
    type: 'INFO' | 'WARINING' | 'ERROR';
    message: string;
}


