import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosinstance";

export interface Tproduct {
  filter: any;
  title: string;
  name: string;
  description: string;
  price: string;
  discount: string;
  prediscount: string;
  image: string;
  showmore: string;
  i: string;
}

export const useProducts = () =>
  useQuery<Tproduct[]>({
    queryKey: ["Product"],
    queryFn: () => axiosInstance("/Product").then((res) => res.data),
  });

export const Showsingleproduct = (productId?: string) => {
  return useQuery<Tproduct>({
    queryKey: ["/Product", productId],
    queryFn: () =>
      axiosInstance(`/Product/${productId}`).then((res) => res.data),
    // enabled: !!productId,
  });
};

// show products by search title
const ShowProductsByname = async (search: string): Promise<Tproduct[]> => {
  const res = await axiosInstance.get<Tproduct[]>("/Product");
  const lowerSearch = search.toLowerCase();
  return res.data.filter((item) =>
    item.name.toLowerCase().includes(lowerSearch)
  );
};

export const useProductsByName = (search: string) =>
  useQuery<Tproduct[]>({
    queryKey: ["Product", search], // کش بر اساس search
    queryFn: () => ShowProductsByname(search),
  });
