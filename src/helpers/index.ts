import { SelectOption } from "../types";

export const createSelectOptions = (items: any) => {
  if (!items) return [];

  const optionToExport: SelectOption[] = [];

  items.forEach((it: any) =>
    optionToExport.push({ label: it.Name, value: it.ID })
  );

  return optionToExport;
};

export const placeSelectArray = [
  {
    label: "São Paulo",
    value: "São Paulo",
  },
  {
    label: "Rio de Janeiro",
    value: "Rio de Janeiro",
  },
  {
    label: "Belo Horizonte",
    value: "Belo Horizonte",
  },
];

export const distanceSelectArray = [
  {
    label: "100km",
    value: 100,
  },
  {
    label: "200km",
    value: 200,
  },
  {
    label: "300km",
    value: 300,
  },
];

export const yearSelectArray = [
  {
    label: "2010",
    value: 2010,
  },
  {
    label: "2011",
    value: 2011,
  },
  {
    label: "2012",
    value: 2012,
  },
  {
    label: "2013",
    value: 2013,
  },
  {
    label: "2014",
    value: 2014,
  },
  {
    label: "2015",
    value: 2015,
  },
  {
    label: "2016",
    value: 2016,
  },
  {
    label: "2017",
    value: 2017,
  },
  {
    label: "2018",
    value: 2018,
  },
  {
    label: "2019",
    value: 2019,
  },
  {
    label: "2020",
    value: 2020,
  },
];

export const priceSelectArray = [
  {
    label: "Menos que R$39.000",
    value: 39000,
  },
  {
    label: "Entre R$39.000 e R$49.000",
    value: 49000,
  },
  {
    label: "Entre R$49.000 e R$59.000",
    value: 59000,
  },
  {
    label: "Entre R$59.000 e R$69.000",
    value: 69000,
  },
  {
    label: "Acima de R$69.000",
    value: 79000,
  },
];
