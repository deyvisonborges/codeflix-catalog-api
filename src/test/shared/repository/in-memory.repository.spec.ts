import { BaseModel } from '../../../shared/model/base.model';
import { InMemoryRepository } from '../../../shared/repository/in-memory.repository';

type StubModelProps = {
  id: string;
  name: string;
  description: string;
};

class StubModel extends BaseModel implements StubModelProps {
  id: string;
  name: string;
  description: string;

  constructor(props: StubModelProps) {
    super();
    Object.assign(this, props);
  }
}

class StubInMemoryRepository extends InMemoryRepository<StubModel> {}

describe('In Memory Repository Unit Tests', () => {
  let repo: StubInMemoryRepository;

  beforeEach(() => {
    repo = new StubInMemoryRepository();
  });

  it('should insert a new entity', async () => {
    const entity = new StubModel({
      id: Math.random.toString(),
      name: `Test`,
      description: `Test`,
    });

    await repo.insert(entity);

    expect(repo.items.length).toBe(1);
    expect(repo.items[0]).toBe(entity);
  });

  it('should bulk insert entities', async () => {
    const entities = [
      new StubModel({
        id: Math.random.toString(),
        name: `Test 001`,
        description: `Test 001`,
      }),
      new StubModel({
        id: Math.random.toString(),
        name: `Test 002`,
        description: `Test 002`,
      }),
    ];

    await repo.createMany(entities);

    expect(repo.items.length).toBe(2);
    expect(repo.items[0]).toBe(entities[0]);
    expect(repo.items[1]).toBe(entities[1]);
  });

  it('should returns all entities', async () => {
    const entity = new StubModel({
      id: Math.random.toString(),
      name: 'name value',
      description: 'some description',
    });
    await repo.insert(entity);

    const entities = await repo.findAll();

    expect(entities).toStrictEqual([entity]);
  });
});
