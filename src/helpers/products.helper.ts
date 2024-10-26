import { IProduct } from "@/interfaces";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB(): Promise<IProduct[]>{

    try {
        const res = await fetch(`${APIURL}/products`,{
            next: {revalidate: 1200}
        })
        const products = await res.json()
        return products;
    } catch (error:any) {
        throw new Error(error)
    }

};

export async function getProductById(id: string): Promise<IProduct> {
    try {
      const products: IProduct[] = await getProductsDB();
      const productFiltered = products.find((product) => product.id.toString() === id);
      if (!productFiltered) throw new Error("Product not found");
      return productFiltered;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  export async function getProductByCategoryOrName(categoryIdOrName: string): Promise<IProduct[]>{
    try {
      const products: IProduct[] = await getProductsDB();

      //filtrar por categoria
      let productFiltered = products.filter((product) => product.categoryId.toString() === categoryIdOrName)


      //si no encuentra por categoria, filtramos por nombre de producto 
      if(!productFiltered.length){
        productFiltered = products.filter((product) => product.name.toLowerCase().includes(categoryIdOrName.toLowerCase()))
      
        if(!productFiltered.length){
          console.error("Product not found")
        }

      }
      return productFiltered;

    } catch (error: any) {
      throw new Error(error);
    }
  };
  


  