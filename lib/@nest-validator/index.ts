type PrimitiveUnknown = { type: 'unknown' };
type PrimitiveString = { type: 'string' };
type PrimitiveNumber = { type: 'number' };

type PrimitiveTypes = PrimitiveUnknown | PrimitiveString | PrimitiveNumber;

type Infer<T extends PrimitiveTypes> = T extends PrimitiveUnknown
  ? unknown
  : T extends PrimitiveString
  ? string
  : T extends PrimitiveNumber
  ? number
  : 'invalid type';

// unknown
type result1 = Infer<PrimitiveUnknown>;
// string
type result2 = Infer<PrimitiveString>;
// number
type result3 = Infer<PrimitiveNumber>;
