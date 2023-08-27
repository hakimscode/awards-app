export type AwardsType = {
  id: number;
  name: string;
  type: string;
  requiredPoint: number;
};

export type ListAwardsProps = {
  listAward: AwardsType[];
};
