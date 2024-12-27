/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    tracking: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);
  };

  useEffect(() => {
    let timeout;
    if (submitted && form.tracking) {
      const tracking = form.tracking;
      timeout = setTimeout(() => {
        navigate(`/item/${tracking}`);
        setLoading(false);
        setSubmitted(false);
      }, 4000);
    } else {
      setLoading(false);
      setSubmitted(false);
    }

    return () => clearTimeout(timeout);
  }, [form.tracking, submitted, navigate]);

  return (
    <section className="bgImg">
      <div className="flex flex-col gap-4 w-full md:w-[50%] bg-black text-white py-20 px-10">
        <h3 className="text-xl md:text-2xl font-semibold capitalize text-center md:text-left">
          search or track packages
        </h3>
        <span className="relative">
          <input
            type="text"
            placeholder="Enter tracking number(s)"
            className="border-2 border-black w-full p-2 placeholder:text-slate-800 outline-none text-black placeholder:text-sm"
            name="tracking"
            onChange={handleInput}
            value={form.tracking}
          />
          <MdSearch
            onClick={handleSubmit}
            className="absolute top-[10px] right-3 w-7 h-7 text-black cursor-pointer"
          />
        </span>
        <span>
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white py-2 px-6"
            disabled={loading}
          >
            {!loading ? "Track" : "Wait..."}
          </button>
        </span>
      </div>
    </section>
  );
};

export default Hero;
