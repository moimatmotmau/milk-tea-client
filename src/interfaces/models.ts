export interface IProduct {
	name: string;
	price: string;
	salePrice: string;
	image: string;
	category: string;
	sizeM: boolean;
	sizeL: boolean;
	hot: boolean;
	_id: string;
}
export interface IState {
	id?: number,
	name?: string,
	productImg?: string,
	price?: number,
	quantitySelect?: number,
	size?: string | null,
	ice?: string,
	sugar?: string,
	topping?: string[] | any,
	totalMoney?: number | null,
}
export interface IUser {
	username: string;
	password: string;
	email: string;
	phone: string;
	fullName: string;
	age: string;
	avatar: string;
	address: string;
	cart: any[];
	orders: any[];
    role: string;
	_id: string;
}
//checkout models
export interface ICart {
    name: string;
    size:string;
    ice:string;
    sugar:string;
    quantitySelect: string;
    price: string;
    topping:string[];
    productImg: string,
  };
  
  export interface IOrder {
        name: string;
        size: string;
        ice: string;
        sugar: string;
        quantitySelect: string;
        price: string;
        total: string;
        topping: string[];
    }

export interface IOrders {
                username: string;
                phone: string;
                address: string;
                orders: IOrder[];
                paid: boolean;
                status: string;
                fullName: string;
                time: string;
                _id?: string;
                }

// map modals
export interface IProperties {
    id?: string;
    name: string;
    distance: string;
    address?: string;
    district?: string;
}

export interface IGeometry {
    type: string;
    coordinates: number[];
}

export interface IFeature {
    type: string;
    properties: IProperties;
    geometry: IGeometry;
}

export interface IMap {
    type: string;
    features: IFeature[];
}