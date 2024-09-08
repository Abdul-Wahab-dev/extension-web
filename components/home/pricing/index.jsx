import React, { useEffect, useState } from "react";
import tick from "@/assets/tick.svg";
import Image from "next/image";
import { getProducts } from "../../../lib/services/product";
import { createSubscription } from "../../../lib/services//subscription";
import { useAuthentication } from "@/store/auth";
import { useRouter } from "next/navigation";
const Pricing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPriceId, setSelectedPriceId] = useState("");
  const router = useRouter();
  const auth = useAuthentication((state) => state);
  useEffect(() => {
    (async () => {
      await fetchProducts();
    })();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await getProducts();
    if (res) setProducts([...res.products]);
    setLoading(false);
  };

  const handleSubscribe = async (priceId) => {
    if (!auth.isAuthenticated) {
      router.push("/login");
    }
    if (!priceId) return;

    setSelectedPriceId(priceId);
    try {
      const res = await createSubscription(priceId);
      if (res) {
        const { session } = res;
        if (session) {
          const a = document.createElement("a");
          a.href = session.url;
          a.target = "_self";
          a.click();
        }
        setSelectedPriceId("");
      }
    } catch (error) {
      setSelectedPriceId("");
    }
  };
  return (
    <div className="bg-[#f9f9f9] md:p-20 p-10">
      <div className="custom_container mx-auto">
        <div className=" items-start flex flex-col">
          <h3 className="text-4xl mb-4 sm:text-3xl text-[#454647]">
            Plans & pricing
          </h3>
          <p className="text-subTitle mb-12 text-xl sm:text-lg text-[#454647]">
            Choose the plan that suits your needs, cancel anytime.
          </p>
          <div className="flex gap-6 flex-wrap self-center justify-center">
            {loading
              ? [1, 2, 3, 4].map((el) => (
                  <div
                    key={el}
                    className="w-[280px] h-[340px] hover:scale-105 transition-transform p-6 flex flex-col items-start gap-6 bg-white rounded shadow-lg"
                  ></div>
                ))
              : null}
            {!loading &&
              products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className="w-[280px] h-[340px] hover:scale-105 transition-transform p-6 flex flex-col items-start gap-6 bg-white rounded shadow-lg"
                  >
                    <p className="flex flex-col text-[#454647] text-xl sm:text-lg">
                      {product.name}
                    </p>
                    <h3 className="text-5xl text-[#454647] font-normal sm:text-4xl">
                      {product.price.actualPrice}
                      {product.price !== "Free" && (
                        <strong className="font-normal text-subTitle text-2xl sm:text-xl">
                          /month
                        </strong>
                      )}
                    </h3>
                    <div className="flex items-center justify-center w-full">
                      <button
                        onClick={() => handleSubscribe(product.price.id)}
                        className="text-[#454647] sub-btn hover:bg-[#454647] text-lg hover:text-white transition-all flex items-center justify-center gap-3 px-5 py-1  border border-[#454647] rounded-lg"
                      >
                        <span>Subscribe</span>
                        {selectedPriceId === product.price.id ? (
                          <div className="spinner"></div>
                        ) : null}
                      </button>
                    </div>
                    <div className="flex flex-col items-start text-[#454647]">
                      {/* {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Image className="mt-2" width={16} src={tick} />
                        <p>{feature}</p>
                      </div>
                    ))} */}
                      {/* <p className="text-subTitle ml-6">{product.chatCount}</p> */}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
