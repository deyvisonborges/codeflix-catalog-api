export interface GenericMapperType<Entity, DTO> {
  toEntity(dto: DTO): Entity;
  toDTO(entity: Entity): DTO;
}

export class GenericMapper<Entity, DTO> {
  toEntity(input: DTO | Entity): Entity {
    return { ...input } as unknown as Entity;
  }

  toDTO(entity: Entity): DTO {
    return { ...entity } as unknown as DTO;
  }
}
