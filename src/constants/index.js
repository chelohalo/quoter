export const BRANDS = [
  { id:1, name:'Audi'},
  { id:2, name:'Ford'},
  { id:3, name:'Toyota'},
]
export const PLANS = [
  { id:1, name:'Basic'},
  { id:2, name:'Premium'},
]

const YEARMAX = new Date().getFullYear()
export const YEARS = Array.from(new Array(20), (value, index) => YEARMAX - index)