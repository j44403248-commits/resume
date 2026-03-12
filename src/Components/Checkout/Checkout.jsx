import React, { useState } from "react";
import { FileText, Pencil, CreditCard, Wallet } from "lucide-react";

export default function Checkout() {
  const [delivery, setDelivery] = useState(false);

  return (
    <div className="bg-black min-h-screen mt-5g py-12 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border">

          <h2 className="text-2xl font-semibold mb-2 text-black">Your details</h2>

          <p className="text-gray-500 mb-6">
            We only use this information to deliver your service and send your confirmation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-black">
                Full Name <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-black">
                Email <span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold text-black">
                Phone <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="+1 555 000 0000"
                className="w-full border rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* Country */}
            <div>
              <label className="text-sm font-semibold text-black">
                Country <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Country"
                className="w-full border rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-black">
                Address <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Street address"
                className="w-full border rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* City */}
            <div>
              <label className="text-sm font-semibold text-black">
                City <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="City"
                className="w-full border rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* Postal */}
            <div>
              <label className="text-sm font-semibold text-black">
                Postal Code <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="ZIP / Postal"
                className="w-full border rounded-lg px-4 py-3 mt-2 focus:outline-none focus:border-[#F0B100]"
              />
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-black">Notes (optional)</label>
              <textarea
                placeholder="Anything you want me to know"
                className="w-full border rounded-lg px-4 py-3 mt-2 h-28 focus:outline-none focus:border-[#F0B100]"
              />
            </div>
          </div>

          {/* Resume Type */}
          <div className="mt-10 border rounded-xl p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-black">
                Resume type
              </h3>
              <div className="bg-orange-100 p-2 rounded-lg">
                <FileText size={18} className="text-[#F0B100]"/>
              </div>
            </div>

            <p className="text-gray-500 text-sm mb-4">
              Choose how you want your resume handled. This opens the right form.
            </p>

            {/* Options */}
            <div className="flex gap-6 items-center justify-center">
              <label className="flex justify-between items-center border rounded-xl p-4 gap-4 cursor-pointer">
                <div className="flex items-center gap-4">
                  <input type="radio" name="resume"/>
                  <span className="text-black">Resume from scratch</span>
                </div>
                <FileText className="text-[#F0B100]"/>
              </label>

              <label className="flex gap-4 justify-between items-center border rounded-xl p-4 cursor-pointer">
                <div className="flex items-center gap-4">
                  <input type="radio" name="resume"/>
                  <span className="text-black">Resume revamp</span>
                </div>
                <Pencil className="text-[#F0B100]"/>
              </label>
            </div>

            <p className="text-gray-500 text-sm mt-3">
              Your checkout details are saved. Use “Back to checkout” on the form to return without losing your info.
            </p>
          </div>

          {/* Payment Method */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4 text-black">
              Payment method
            </h3>

            <label className="flex justify-between items-center border rounded-xl p-2 mb-3 cursor-pointer">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment"/>
                <span className="text-black">Pay with Card</span>
              </div>
              <CreditCard className="text-[#F0B100]"/>
            </label>

            <label className="flex justify-between items-center border rounded-xl p-4 cursor-pointer">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment"/>
                <span className="text-black">Pay directly (Zelle, Apple Pay, Google Pay, PayPal)</span>
              </div>
              <Wallet className="text-[#F0B100]"/>
            </label>

            {/* Payment Info */}
            <div className="border rounded-xl p-6 mt-6 text-sm space-y-3 bg-white text-black">
              <h1 className="text-semibold text-2xl">Thanks for trusting Resumes Uplift Services.</h1>
              <p>
                To proceed, please complete the payment of 
                <span className="text-[#F0B100] font-semibold"> $240.00 </span>
                using any of the methods below.
              </p>

              <h4 className="font-semibold text-gray-500">Payment methods</h4>
              <p><span className="text-gray-500">Zelle: </span> shopwise@letshopdeals.com</p>
              <p><span className="text-gray-500">Apple Pay: </span> +1 (916) 860-6134</p>
              <p><span className="text-gray-500">Google Pay: </span> Zunairkhalid.zk@gmail.com</p>
              <p><span className="text-gray-500">PayPal: </span> waseemhaiderjatoi@gmail.com</p>

              <h4 className="font-semibold text-gray-500">Payment confirmation</h4>
              <p>Once the payment is completed, please send a screenshot of the transaction on WhatsApp.</p>
              <p>WhatsApp: +44 7478 564745</p>
              <p className="text-gray-500">
                Your order will be started once payment is verified. You will be contacted via WhatsApp or LinkedIn for further details about your project.
              </p>

              <button className="w-full bg-[#F0B100] text-white py-3 rounded-lg font-semibold mt-3">
                Confirm order & get payment details
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 h-170 rounded-2xl border">
          <h3 className="text-xl font-semibold mb-2 text-black">Order summary</h3>
          <p className="text-gray-500 text-sm mb-6">
            Select your plan and review the total.
          </p>

          <label className="text-xs font-bold block mb-2 text-black">PLAN</label>
          <select className="w-full border rounded-lg px-4 py-3 mb-6">
            <option>Mid Level — $200.00</option>
            <option>Entry Level — $120.00</option>
            <option>Executive — $350.00</option>
          </select>

          <h4 className="text-xs font-bold mb-3 text-black">PACKAGE BREAKDOWN</h4>
          <div className="border rounded-xl p-4 mb-4">
            <div className="flex justify-between mb-2">
              <span>✔ Cover Letter</span>
              <span>$50</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>✔ LinkedIn Profile Optimization</span>
              <span>$50</span>
            </div>
            <div className="flex justify-between">
              <span>✔ Resume</span>
              <span>$100</span>
            </div>
          </div>

          <div className="border-2 border-[#F0B100] shadow-md rounded-xl p-4 flex justify-between items-center text-black bg-[#FBF4EF] font-semibold mb-4">
            <span>ALL COMBINED</span>
            <span>$200</span>
          </div>

          <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer mb-6">
            <input
              type="checkbox"
              checked={delivery}
              onChange={() => setDelivery(!delivery)}
              className="accent-orange-500"
            />
            <span className="text-black">12 hours delivery (+$40.00)</span>
          </label>

          <div className="flex justify-between text-lg font-semibold border-t pt-4 text-black">
            <span>Total</span>
            <span>${delivery ? "240.00" : "200.00"}</span>
          </div>

          {/* Added Section */}
          <div className="mt-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span>Resume</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span>Cover Letter</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span>LinkedIn Profile Optimization</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}