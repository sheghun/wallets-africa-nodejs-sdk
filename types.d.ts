declare type currencyType = 'NGN' | 'USD' | 'GHS' | 'KES';

declare interface TransactionOptionsType {
    skip?: number;
    take?: number;
    // A valid date format in string
    dateFrom?: string | Date;
    // A valid date format in string
    dateTo?: '2020-01-15';
    transactionType?: number;
    currency?: currencyType;
}
