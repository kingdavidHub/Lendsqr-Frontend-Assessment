import { FindSomethingProps, UserRecord } from "../types";

export function findSomething(
  data: FindSomethingProps,
  allData: Array<FindSomethingProps>
) {
  const findData = allData.filter((item) =>
    Object.keys(data).every(
      (key) =>
        item[key as keyof FindSomethingProps] ===
        data[key as keyof FindSomethingProps]
    )
  );
  return findData;
}

export function chunkCurrentData(data: UserRecord[]) {
  const chunked: UserRecord[][] = [];
  for (let i = 0; i < data.length; i += 100) {
    chunked.push(data.slice(i, i + 100));
  }
  return chunked; 
}
