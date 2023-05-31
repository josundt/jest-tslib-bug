export function decorate(key: string, value: any): (ctor: Function) => void {
  return (ctor: Function): void => {
    (ctor as any)[key] = value;
  };
}
