import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import {
  ComplexPaginationContainer,
  OrdersList,
  PaginationContainer,
  SectionTitle,
} from "../Components";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params: params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    // console.log(user);
    if (!user) {
      toast.warn("You must be logged in to view orders");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    // console.log(params);
    try {
      // console.log(ordersQuery(params, user));
      const response = await queryClient.ensureQueryData(ordersQuery(params,user));
       return {
         orders: response.data.data,
         meta: response.data.meta,
       };
      console.log(response);
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Please double check you credentials";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
    }
  };
const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please make an order" />;
  }
  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};
export default Orders;
