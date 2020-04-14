import { SelectOption } from "../types";

export const createSelectOptions = (items: any) => {
  if (!items) return [];

  const optionToExport: SelectOption[] = [];

  items.forEach((it: any) =>
    optionToExport.push({ label: it.Name, value: it.ID })
  );

  return optionToExport;
};
