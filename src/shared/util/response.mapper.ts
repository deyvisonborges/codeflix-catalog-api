export function responseMapper<T>(obj: Partial<Record<keyof T, any>>): T {
  const kebabCaseObject: Record<string, any> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const kebabCaseKey = key
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert camelCase to kebab-case
        .toLowerCase();

      kebabCaseObject[kebabCaseKey] = obj[key];
    }
  }

  return kebabCaseObject as T;
}
