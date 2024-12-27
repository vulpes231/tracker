/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styles } from "../constants/constants";
import { getPackage } from "../utils/utils";
import userData from "../data/db.json";

const Item = () => {
  const { tracking } = useParams();

  const [item, setItem] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (tracking) {
      const itemInfo = getPackage(tracking, userData);

      console.log(itemInfo);

      if (!itemInfo) {
        setError(
          "Invalid tracking number. check your tracking number and try again"
        );
      } else {
        setItem(itemInfo);
      }
    }
  }, [tracking]);

  if (error) {
    return (
      <section className="p-6 bg-zinc-200 text-slate-800 h-screen">
        <div className="font-bold text-red-500 text-center">
          <h3>Package not found!</h3>
        </div>
      </section>
    );
  }

  return (
    <section className="p-6 bg-zinc-200 text-slate-800 h-screen">
      <div className="lg:max-w-[1100px] lg:mx-auto flex flex-col gap-6">
        <h3 className="font-bold bg-green-600 text-white p-4">
          Tracking number: {tracking}
        </h3>
        <div>
          <h4>Updated delivery day: {item?.date || "N/A"} </h4>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-bold bg-green-600 text-white p-4">
            Product &amp; tracking information
          </h3>
          <div className="flex items-center gap-10">
            <span className="flex text-sm flex-col">
              <h3>Postal product</h3>
              <small>{item?.postal?.[0] || "N/A"}</small>{" "}
              {/* Safely access postal */}
            </span>
            <span className="flex text-sm flex-col">
              <h3>Features</h3>
              <small>{item?.features || "N/A"}</small>
            </span>
          </div>
          <div className="overflow-auto">
            <table className="bg-white min-w-full">
              <thead>
                <tr className="text-white bg-green-600 text-xs uppercase">
                  <th className={styles.th}>DATE &amp; TIME</th>
                  <th className={styles.th}>STATUS OF ITEM</th>
                  <th className={styles.th}>LOCATION</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm">
                  <td className={styles.th} data-label="Date and Time">
                    {item?.date || "N/A"}
                  </td>
                  <td className={styles.th} data-label="Status">
                    {item?.status?.[0] || "N/A"} {/* Safely access status */}
                  </td>
                  <td className={styles.th} data-label="Location">
                    {item?.address || "N/A"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-600 p-4 text-white">
            <small>
              Your item will be delivered by {item?.date || "N/A"} in{" "}
              {item?.address || "N/A"}
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
