export type WidthHistoryRecord = {
  amount: number;
  updaterId: string;
}

export type LineageNode = {
  name: string;
  images: string[];
  id: string;
  descriptionHTML: string
  descriptionDelta: string
  mates: Mate[]
  water_values: number[];
  substrate_values: number[]
};

export type Mate = {
  name: string;
  images: string[];
  id: string;
  children: LineageNode[]
}

export type LeanLineageNode = {
  name: string;
  image?: string;
  id: string;
};


export type FilterEntry = [string, string | number | boolean | FilterEntry];

export type FlatEntry = [string, string | number | boolean];


export type Species = {
  name: string;
  images: string[];
  id: string;
}

export type Parent = {
 image: string;
 name: string;
 id: string;
}

export type SubstrateEntry = {
  substrate: string;
  percent: number
  color: string
}

export type WaterEntry = {
  month: string;
 water_count: number
}

export type Group =  {
  id: string;
  name: string;
}