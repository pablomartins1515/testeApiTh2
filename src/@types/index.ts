
export interface ClientsType {  
  id: number
  firstname: string
  lastname: string
  email: string
  birthday: string
  phone: string
  address: string 
  creditCard: {
    number: string
    expiration: string
    type: string
    owner: string
  }, 
  addresses: {
    street: string
    streetName: string
    buildingNumber: string,
    city: string
    zipcode: number
    country: string
    county_code: string
  }
  
}

