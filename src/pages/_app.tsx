import QueryClientProvider from "@/hooks/QueryClientProvider";
import { GlobalStyle } from "@/styles/global";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
