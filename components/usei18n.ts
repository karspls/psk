const strings = {
  logoText: "Конвертер валют",
  calculatoreCaption: `Конвертер валют  — инструмент, который позволит вам рассчитать соотношения актуальных курсов денежных средств всего мира на сегодня.\nВсе переводы курсов конвертер осуществляет на основе стоимости валют по данным мировой биржи.`,
  calculatorCredits: `PSK- Конвертер валют`,
  calculatorAuthors: "Plekhanov Ivan / Starodvorsky Max / Khoma Vladimir",
  ratesLoadingText: "Загрузка курса обмена",
  loading: "Загрузка...",
} as const;

const usei18n = () => {
  return <TKey extends keyof typeof strings>(key: TKey) => {
    return strings[key];
  };
};

export default usei18n;
