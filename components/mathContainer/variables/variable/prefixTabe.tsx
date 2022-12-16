export interface PrefixType {
  label: string;
  caractere: string;
}

export interface PrefixTableType {
  [key: number]: PrefixType;
}

export const prefixTable: PrefixTableType = {
  [15]: { label: 'Peta', caractere: 'P' },
  [12]: { label: 'Tera', caractere: 'T' },
  [9]: { label: 'Giga', caractere: 'G' },
  [6]: { label: 'Mega', caractere: 'M' },
  [3]: { label: 'Quilo', caractere: 'k' },
  [2]: { label: 'Hecto', caractere: 'h' },
  [1]: { label: 'Deca', caractere: 'da' },
  [0]: { label: 'Natu', caractere: 'N' },
  [-1]: { label: 'Deci', caractere: 'd' },
  [-2]: { label: 'Centi', caractere: 'c' },
  [-3]: { label: 'Mili', caractere: 'm' },
  [-6]: { label: 'Micro', caractere: 'μ' },
  [-9]: { label: 'Nano', caractere: 'n' },
  [-12]: { label: 'Pico', caractere: 'p' },
};
