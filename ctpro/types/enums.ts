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
    NEW = "Hóa đơn mới",
    CASH = 'Hóa đơn thay thế',
    CREDIT_CARD = 'Hóa đơn điều chỉnh',
    BANK_TRANSFER = 'Hóa đơn đã bị thay thế',
    NK_TRANSFER = 'Hóa đơn đã bị điều chỉnh',
    OTHER = 'Hóa đơn đã bị hủy',
  }