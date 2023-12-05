export type TCategories = {
  filter: string;
  isSelected: boolean;
  name: string;
};

export type TCities = {
  url: string;
  isSelected: boolean;
  name: string;
};

export type TSortingFilter = {
  filter: string;
  label: string;
  isSelected: boolean;
  isDisabled: boolean;
};

export type TColor = {
  engName: string;
  ruName: string;
  hexCode: string;
  isSelected: boolean;
};
