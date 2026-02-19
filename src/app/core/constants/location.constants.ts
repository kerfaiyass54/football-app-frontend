
export const LOCATION_FIELDS = [
  {
    key: 'name',
    label: 'Location Name',
    type: 'text'
  },
  {
    key: 'supporters',
    label: 'Supporters',
    type: 'number' // represents count or IDs list
  }
];

export const LOCATION_TABLE_COLUMNS = [
  {
    key: 'name',
    label: 'Location Name',
    sortable: true
  },
  {
    key: 'supporters',
    label: 'Supporters Count',
    sortable: false,
    formatter: (value: number[] | undefined) =>
      value ? value.length.toString() : '0'
  }
];
