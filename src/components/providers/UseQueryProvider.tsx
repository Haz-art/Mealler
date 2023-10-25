import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query"

interface UseQueryProviderProps {
  children: React.ReactNode
}

export const UseQueryProvider: React.FC<UseQueryProviderProps> = ({
  children,
}) => {
  const queryClient = new QueryClient()

  return <Provider client={queryClient}>{children}</Provider>
}
