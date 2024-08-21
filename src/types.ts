// Type for the 'header' key
export interface Header {
  desc: string
  img: string
  video: string
  btn_text: string
  btn_link: string
}

// Type for the 'about' key
export interface AboutValue {
  id: number
  title: string
}

export interface About {
  title: string
  desc: string
  img: string
  values: AboutValue[]
}

// Type for the 'brands' key
export interface BrandCategory {
  id: number
  title: string
}

export interface Brand {
  id: number
  title: string
  desc: string
  img: string
  categories: BrandCategory[]
}

// Type for the 'contact' key
export interface Contact {
  advertisement: string
}

// Type for the 'footer' key
export interface FooterSocials {
  facebook: string
  twitter: string
  instagram: string
  snapchat: string
}

export interface Footer {
  logo: string
  phone: string
  email: string
  socials: FooterSocials
}

// Main type that includes all the above
export interface DataResponse {
  header: Header
  about: About
  brands: Brand[]
  contact: Contact
  footer: Footer
}

// Full API response type
export interface ApiResponse {
  status: string
  data: DataResponse
  message: string
}
