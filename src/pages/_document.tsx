import {
  DocumentHeadTags,
  documentGetInitialProps,
} from "@mui/material-nextjs/v15-pagesRouter";
import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

// or `v1X-pagesRouter` if you are using Next.js v1X

import { DocumentHeadTagsProps } from "@mui/material-nextjs/v15-pagesRouter";

export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) { // TODO: Check if this is the correct type
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
        ...
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: any) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
