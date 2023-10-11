import QueryClientProvider from "@/hooks/QueryClientProvider";
import { GlobalStyle } from "@/styles/global";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <QueryClientProvider>
          <GlobalStyle />
          <Main />
          <NextScript />
        </QueryClientProvider>
      </body>
    </Html>
  );
};

export default Document;
