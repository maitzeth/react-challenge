
/**
 * Calculates the total installment amount given the total amount and the number of terms
 */
export const calculateInstallmentTotal = (total: number, terms: number) => {
  if (total === 0 && terms === 0) {
    return 0;
  }

  return parseFloat((total / terms).toFixed(2))
}

/**
 * Format a number to a Argentinian currency
 */
export const formatNumberToCurrency = (num: number, decimals: boolean = true) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    ...(!decimals && ({
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }))
  }).format(num);
}

