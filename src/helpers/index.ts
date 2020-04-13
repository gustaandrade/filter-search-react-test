import { Brand, SelectOption } from "../types";

export const createSelectOptions = (items: any) => {
  if (!items) return [];

  const optionToExport: SelectOption[] = [];

  items.forEach((it: any) =>
    optionToExport.push({ label: it.name, value: it.id })
  );

  return optionToExport;
};
