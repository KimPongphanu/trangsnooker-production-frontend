/**
 * @param {number} amount - จำนวนเงินที่ต้องการจัดรูปแบบ
 * @returns {string} รูปแบบ: ฿89,000.00
 */
export const formatCurrencyStandard = (amount: number) => {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}
