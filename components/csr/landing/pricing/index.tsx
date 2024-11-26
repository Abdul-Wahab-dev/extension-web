"use client";
import React, { useEffect, useState } from "react";

import { getProducts } from "@/lib/services/product";
import {
  createSubscription,
  updateSubscription,
} from "@/lib/services//subscription";
import { getCurrentUser } from "@/lib/services/authentication";
import { useAuthentication } from "@/store/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const loading = false;
  const [selectedPriceId, setSelectedPriceId] = useState("");
  const [userPackage, setUserPackage] = useState(null);
  const router = useRouter();
  const auth = useAuthentication((state) => state);
  useEffect(() => {
    (async () => {
      await fetchProducts();
    })();
  }, []);
  useEffect(() => {
    if (auth.isAuthenticated)
      (async () => {
        await fetchCurrentUser();
      })();
  }, [auth.isAuthenticated]);
  const fetchCurrentUser = async () => {
    if (!auth.isAuthenticated) return;
    const res = await getCurrentUser();
    if (res) {
      auth.setCurrentUser(res.user);
      if (res.user && res.user.package) {
        setUserPackage(res.user.package);
      }
    }
  };
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await getProducts();
      if (res) setProducts([...res.products]);
      setLoading(false);
    } catch (error) {
      const message = error.message || "Failed to process your request";
      toast.error(message);
    }
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
      const message = error.message || "Failed to process your request";
      toast.error(message);
      setSelectedPriceId("");
    }
  };
  const updateSubscribe = async (priceId) => {
    if (!auth.isAuthenticated) {
      router.push("/login");
    }
    if (!priceId) return;

    setSelectedPriceId(priceId);
    try {
      const res = await updateSubscription(priceId);
      if (res) {
        setTimeout(() => {
          (async () => {
            await fetchCurrentUser();
            setSelectedPriceId("");
            toast.success("Your subscription is successfully updated");
          })();
        }, 2000);
      }
    } catch (error) {
      const message = error.message || "Failed to process your request";
      toast.error(message);
      setSelectedPriceId("");
    }
  };
  return (
    <>
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
              className="w-[300px] relative h-[370px] hover:scale-105 transition-transform p-6 flex flex-col items-start gap-6 bg-white rounded shadow-lg"
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
              <ul>
                <li className="flex items-start justify-start gap-3">
                  <amp-img
                    src="/assests/icons/check.png"
                    alt="tick"
                    width="15"
                    height="15"
                    className="mt-[7px]"
                  />
                  <span>
                    You can save upto {product.metadata.contentLimit || 0}{" "}
                    contents
                  </span>
                </li>
                <li className="flex items-start justify-start gap-3">
                  <amp-img
                    src="/assests/icons/check.png"
                    alt="tick"
                    width="15"
                    height="15"
                    className="mt-[7px]"
                  />
                  <span>
                    You can create upto {product.metadata.collectionLimit || 0}{" "}
                    collections
                  </span>
                </li>
                <li className="flex items-start justify-start gap-3">
                  <amp-img
                    src="/assests/icons/check.png"
                    alt="tick"
                    width="15"
                    height="15"
                    className="mt-[7px]"
                  />
                  <span>
                    You can share with upto {product.metadata.shareWith || 0}{" "}
                    people
                  </span>
                </li>
              </ul>
              <div className="flex items-center justify-center w-full">
                {userPackage && userPackage.status === "active" ? (
                  <button
                    onClick={() => updateSubscribe(product.price.id)}
                    className={` sub-btn text-lg  transition-all flex items-center justify-center gap-3 px-5 py-1  border border-[#454647] rounded-lg
                          ${
                            userPackage.status === "active" &&
                            userPackage.planId === product.price.id
                              ? "bg-[#454647] text-lg text-white"
                              : "bg-white  text-[#454647] hover:text-white hover:bg-[#454647] "
                          }}
                            `}
                    disabled={
                      userPackage &&
                      userPackage.status === "active" &&
                      userPackage.planId === product.price.id
                        ? true
                        : false
                    }
                  >
                    {userPackage.status === "active" &&
                    userPackage.planId === product.price.id ? (
                      <span className="text-white">Subscribed</span>
                    ) : (
                      <span>Update</span>
                    )}

                    {selectedPriceId === product.price.id ? (
                      <div className="spinner"></div>
                    ) : null}
                  </button>
                ) : (
                  <button
                    onClick={() => handleSubscribe(product.price.id)}
                    className="text-[#454647] absolute bottom-7 sub-btn hover:bg-[#454647] text-lg hover:text-white transition-all flex items-center justify-center gap-3 px-5 py-1  border border-[#454647] rounded-lg"
                  >
                    <span>Subscribe</span>
                    {selectedPriceId === product.price.id ? (
                      <div className="spinner"></div>
                    ) : null}
                  </button>
                )}
              </div>
              <div className="flex flex-col items-start text-[#454647]"></div>
            </div>
          );
        })}
    </>
  );
};

export default index;
