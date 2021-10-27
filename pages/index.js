import Head from "next/head";
import HealthAndBeauty from "../components/categories/health/Health&beauty";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import AdsBanner from "../components/hooks/AdsBanner";
import Catergories from "../components/hooks/Categories";
import CategorieContainer from "../components/hooks/CategorieContainer";
import SimilarProducts from "../components/hooks/SimilarProducts";
import LandingBanner from "../components/hooks/LandingBanner";
import FashionProducts from "../components/categories/fashion/FashionProduct";
import ProductContainer from "../components/hooks/ProductContainer";
import WristWatches from "../components/categories/wristWatches/WristWatches";

export default function Home() {
 return (
  <>
   <Head>
    <link
     href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap"
     rel="stylesheet"
    />
   </Head>

   <div>
    <Navbar />
   </div>

   <main className="my-36 md:my-20"></main>

   <div>
    <LandingBanner />
   </div>

   <div>
    <CategorieContainer>
     <Catergories />
    </CategorieContainer>
   </div>

   <div>
    <ProductContainer>
     <FashionProducts />
    </ProductContainer>
   </div>

   <div>
    <ProductContainer>
     <HealthAndBeauty />
    </ProductContainer>
   </div>

   <div>
    <AdsBanner />
   </div>

   <div>
    <ProductContainer>
     <WristWatches />
    </ProductContainer>
   </div>

   <div>
    <Footer />
   </div>
  </>
 );
}
