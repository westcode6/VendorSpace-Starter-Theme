import Document, {
 Html,
 Head,
 Main,
 NextScript,
} from "next/document";
import "../styles/globals.css";

class MyDocument extends Document {
 render() {
  return (
   <Html>
    <Head>
     <link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap"
      rel="stylesheet"
     />
    </Head>

    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  );
 }
}

export default MyDocument;
