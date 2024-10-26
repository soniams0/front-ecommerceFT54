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

  export async function getProductByCategoryOrName(categoryIdOrName?: string): Promise<IProduct[]> {
    if (!categoryIdOrName) {
        console.error("Category or name parameter is missing.");
        return []; // Devuelve un array vacío si falta el parámetro
    }

    try {
        const products: IProduct[] = await getProductsDB();

        // Filtrar por categoría
        let productFiltered = products.filter((product) => product.categoryId.toString() === categoryIdOrName);

        // Si no encuentra por categoría, filtra por nombre del producto
        if (!productFiltered.length) {
            productFiltered = products.filter((product) =>
                product.name.toLowerCase().includes(categoryIdOrName.toLowerCase())
            );

            if (!productFiltered.length) {
                console.error("Product not found");
            }
        }

        return productFiltered;

    } catch (error: any) {
        console.error("Error fetching products:", error);
        throw new Error(error);
    }
};

  


  