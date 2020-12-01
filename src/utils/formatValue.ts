const formatValue = (value: number): string => {
  const formattedValueAsString = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formattedValueAsString;
};

export default formatValue;
