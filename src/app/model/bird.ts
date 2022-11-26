export class Bird {
  [x: string]: any;
  id: number = 0;
  name: string = '';
  description?: string = '';
  image: string = '';
  maxSize: number = 0;
  protected: boolean = true;

  constructor(properties?: Bird) {
    if (properties) {
      this.id = properties.id || 0;
      this.name = properties.name || '';
      this.description = properties.description || '';
      this.image = properties.image || '';
      this.maxSize = properties.maxSize || 0;
      this.protected = properties.protected || true;
    }
  }
}
