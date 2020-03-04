declare type currencyType = 'NGN' | 'USD' | 'GHS' | 'KES';

declare interface TransactionOptions {
    skip?: number;
    take?: number;
    // A valid date format in string
    dateFrom?: string | Date;
    // A valid date format in string
    dateTo?: string | Date;
    transactionType?: number;
    transactionPin?: string | number;
    currency?: currencyType;
}

declare interface BankTransOptions {
    SecretKey: string;
    BankCode: string;
    AccountNumber: string;
    AccountName: string;
    TransactionReference: string;
    Amount: number;
}

declare interface CreateOptions {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    dateOfBirth: string | Date;
}
