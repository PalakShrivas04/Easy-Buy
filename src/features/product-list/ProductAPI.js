// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  //todo : we will not hard code
  return new Promise(async(resolve) => {
    const response = await fetch('http://localhost:7000/products');
    const data = await response.json()
    resolve({ data })
  }
  );
}
