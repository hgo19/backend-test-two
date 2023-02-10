import BeersODM from '../Database/Models/BeersODM';
import IBeerRepository from '../Interfaces/IBeerRepository';
import Beer from '../Domain/Beer';
import IBeer from '../Interfaces/IBeer';

export default class BeerMongooseRepository implements IBeerRepository<Beer, IBeer> {
  constructor(private _persistence = new BeersODM()) {}

  public async create(beer: Beer): Promise<IBeer> {
    const beerDTO = {
      abv: beer.abv,
      address: beer.address,
      category: beer.category,
      city: beer.city,
      coordiantes: beer.coordinates,
      country: beer.country,
      ibu: beer.ibu,
      name: beer.name,
      state: beer.state,
      website: beer.website,
    };
    return this._persistence.create(beerDTO);
  }
}
