export interface Provider<C, U, M> {
  create(createDto: C): Promise<M>;
  findAll(): Promise<M[]>;
  findOne(id: string): Promise<M>;
  update(id: string, updateDto: U): Promise<M>;
  remove(id: string): Promise<null>;
}
