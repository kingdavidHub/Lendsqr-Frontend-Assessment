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


export function formatDate(dateString: string){
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
}