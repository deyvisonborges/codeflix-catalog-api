type CategoryConstructorProps = {
  category_id?: string;
  name: string;
  description?: string | null;
  is_active?: boolean;
  created_at?: Date;
};

export type CategoryCreateCommand = {
  name: string;
  description?: string | null;
  is_active?: null;
};

export class Category {
  category_id: string;
  name: string;
  description: string | null;
  is_active: boolean;
  created_at: Date;

  constructor(props: CategoryConstructorProps) {
    this.category_id = props.category_id;
    this.name = props.name;
    this.description = props.description ?? null;
    this.is_active = props.is_active ?? true;
    this.created_at = props.created_at ?? new Date();
  }

  // Factory Method
  static create(props: CategoryCreateCommand): Category {
    return new Category(props);
  }

  // // Anomico / Operacoes ruims de negocio
  // update(props: Partial<CategoryConstructorProps>): Category {
  //   return new Category({ ...this, ...props });
  // }

  // O metodo é mais expressivo
  // A diferenca que o setter é anemico e representa somente uma mudanca de valor
  // o Changename estar representando uma operacao que vai alem de uma simples mudanca
  // aplicando validacoes, eventos e outros
  public changeName(name: string): void {
    this.name = name;
  }

  activate() {
    this.is_active = true;
  }
}
