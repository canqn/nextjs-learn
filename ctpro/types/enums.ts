export enum PaymentStatus {
    UNPAID = 'unpaid',
    PAID = 'paid',
    REFUNDING = 'refunding',
    REFUNDED = 'refunded',
    FAILED = 'failed',
    EXPIRED = 'expired',
    PAY_AT_PROPERTY = 'pay_at_property',
  }

  export enum PaymentMethod {
    CASH = 'cash',
    CREDIT_CARD = 'credit_card',
    BANK_TRANSFER = 'bank_transfer',
    OTHER = 'other',
  }

  export enum InvoiceStatus {
    NEW = "Hóa đơn mới",                // New Invoice
    CASH = 'Hóa đơn tiền mặt',          // Cash Invoice
    CREDIT_CARD = 'Hóa đơn thẻ tín dụng',// Credit Card Invoice
    BANK_TRANSFER = 'Hóa đơn chuyển khoản', // Bank Transfer Invoice
    REPLACED = 'Hóa đơn đã bị thay thế', // Replaced Invoice
    ADJUSTED = 'Hóa đơn đã điều chỉnh', // Adjusted Invoice
    CANCELED = 'Hóa đơn đã hủy',        // Canceled Invoice
  }  