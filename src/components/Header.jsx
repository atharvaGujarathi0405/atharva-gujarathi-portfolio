import { useGSAP } from "@gsap/react";
import React, { useState, useRef } from "react";
import "remixicon/fonts/remixicon.css";
import { gsap } from "gsap";
import emailjs from "emailjs-com";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const modalRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  gsap.registerPlugin(ScrollToPlugin);

  useGSAP(() => {
    gsap.fromTo(
      "#btn",
      { scale: 1 },
      {
        scale: 1.1,
        ease: "inOut",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
      }
    );
  });

  useGSAP(() => {
    if (open) {
      gsap.fromTo(
        modalRef.current,
        { y: -100, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, [open]);

  useGSAP(() => {
    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: 0, duration: 0.6, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.6, ease: "power3.in" });
    }
  }, [menuOpen]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_6q2vmuh",
        "template_08n6xvk",
        formRef.current,
        "A6VQPKy5L2u997u4a"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setLoading(false);
          setOpen(false);
        },
        (error) => {
          console.error("❌ Error:", error.text);
          alert("Something went wrong. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <div className="fixed w-full flex items-center  justify-end z-100 p-16">
      {}
      <button
        id="btn"
        onClick={() => setOpen(true)}
        className="bg-black px-4 py-2 border-3 cursor-pointer border-amber-600 
                   hover:bg-gray-500 rounded-full text-white font-[anzo2]"
      >
        Let's Connect!
      </button>

      {}
      <i
        id="menubtn"
        onClick={() => setMenuOpen(true)}
        className="ri-menu-unfold-fill text-white bg-black p-1 rounded-xl text-3xl ml-3 cursor-pointer"
      ></i>

      {}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-2xl shadow-lg p-8 w-[90%] max-w-md relative"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 font-bold text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold  text-gray-800 mb-4">
              Let’s Connect
            </h2>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col space-y-4"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-500 transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      )}

      {}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-72 bg-black text-white shadow-lg z-50 translate-x-full"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          ✕
        </button>

        <nav className="flex flex-col mt-16 space-y-6 uppercase font-[anzo1] tracking-widest text-[3vw] px-6">
          {[
            { label: "Home", target: "#page1" },
            { label: "About", target: "#page3" },
            { label: "Projects", target: "#page4" },
            { label: "Academics", target: "#academics" },
            { label: "Contact", target: "#contact" },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                gsap.to(window, {
                  duration: 1,
                  scrollTo: item.target,
                  ease: "power2.inOut",
                });
                setMenuOpen(false);
              }}
              className="hover:text-amber-500 transition text-left"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
