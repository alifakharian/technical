import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wapper from "../Wapper/Wapper";
import AppProviders from "../../Context/AppProvider";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppProviders>
          <Wapper />
        </AppProviders>
      </QueryClientProvider>
    </>
  );
}
