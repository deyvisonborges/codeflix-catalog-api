export class CategoryFakeBuilder {
  private _id: string;
  private _name: string;
  private _description: string;
  private _createdAt?: Date;
  private _updatedAt?: Date;
  private _isActive?: boolean;

  withId(id: string) {
    this._id = id;
    return this;
  }

  withName(name: string) {
    this._name = name;
    return this;
  }
}
