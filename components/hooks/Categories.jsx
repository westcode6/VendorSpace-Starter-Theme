import Link from "next/link";
import Image from "next/image";
export default function Catergories({ children }) {
 return (
  <>
   <div
    className="text-center py-3 mb-2"
    style={{ background: "#E2F5FF", fontWeight: "600" }}
   >
    <h2 className="text-md text-gray-700 tracking-wide">
     Featured Categories
    </h2>
   </div>
   <section className="grid grid-cols-12">
    <Link href="/components/categories/fashion/FashionCollection">
     <div className="col-span-6 md:col-span-2 px-1 hover:shadow-xl transform hover:scale-105 transition duration-500">
      <figure>
       <Image
        src="/image/fashion/s95.jpg"
        width={220}
        height={190}
        className="object-cover rounded-sm"
        alt="product"
       />
      </figure>

      <div className="text-center py-3 text-sm text-gray-700">
       <h2> Men Fashion</h2>
      </div>
     </div>
    </Link>

    <Link href="/components/categories/fashion/FashionCollection">
     <div className="col-span-6 md:col-span-2 px-1 hover:shadow-xl transform hover:scale-105 transition duration-500">
      <figure>
       <Image
        src="/image/fashion/green-bag.jpg"
        width={220}
        height={190}
        className="object-cover rounded-sm"
        alt="product"
       />
      </figure>

      <div className="h-12 text-center py-3 text-sm text-gray-700">
       <h2> Bags</h2>
      </div>
     </div>
    </Link>

    <Link href="/components/categories/fashion/FashionCollection">
     <div className="col-span-6 md:col-span-2 px-1 hover:shadow-xl transform hover:scale-105 transition duration-500">
      <figure>
       <Image
        src="/image/fashion/s84.jpg"
        width={220}
        height={190}
        className="object-cover rounded-sm"
        alt="product"
       />
      </figure>

      <div className="h-12 text-center py-3 text-sm text-gray-700">
       <h2>Women Fashion</h2>
      </div>
     </div>
    </Link>

    <Link href="/components/categories/fashion/FashionCollection">
     <div className="col-span-6 md:col-span-2 px-1 hover:shadow-xl transform hover:scale-105 transition duration-500">
      <figure>
       <Image
        src="/image/watches/3.jpg"
        width={220}
        height={190}
        className="object-cover rounded-sm"
        alt="product"
       />
      </figure>

      <div className="h-12 text-center py-3 text-sm text-gray-700">
       <h2>Wrist Watches</h2>
      </div>
     </div>
    </Link>

    <Link href="/components/categories/fashion/FashionCollection">
     <div className="col-span-6 md:col-span-2 px-1 hover:shadow-xl transform hover:scale-105 transition duration-500">
      <figure>
       <Image
        src="/image/shoes/shoe1.jpg"
        width={220}
        height={190}
        className="object-cover rounded-sm"
        alt="product"
       />
      </figure>

      <div className=" text-center py-3 text-sm text-gray-700">
       <h2> Shoes</h2>
      </div>
     </div>
    </Link>

    <Link href="/components/categories/fashion/FashionCollection">
     <div className="col-span-6 md:col-span-2 px-1 hover:shadow-xl transform hover:scale-105 transition duration-500">
      <figure>
       <Image
        src="/image/health/body-care.jpg"
        width={220}
        height={190}
        className="object-cover rounded-sm"
        alt="product"
       />
      </figure>

      <div className="h-12 text-center py-3 text-sm text-gray-700">
       <h2>Beauty and Makeup</h2>
      </div>
     </div>
    </Link>
   </section>
  </>
 );
}
