"use client";

import * as React from "react";
import { X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  catalogName: string;
  productName?: string;
  whatsappNumber: string;
}

export function InquiryModal({
  isOpen,
  onClose,
  catalogName,
  productName,
  whatsappNumber,
}: InquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "product",
    message: "",
    budget: "",
    timeline: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const message = `
🏪 *New Inquiry from ${catalogName}*

👤 *Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
${formData.email ? `Email: ${formData.email}` : ''}

📦 *Inquiry Details:*
${productName ? `Product: ${productName}` : ''}
Type: ${formData.inquiryType}
${formData.budget ? `Budget: ${formData.budget}` : ''}
${formData.timeline ? `Timeline: ${formData.timeline}` : ''}

💬 *Message:*
${formData.message}

---
Sent via Digital Catalog
    `.trim();

    // Open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/91${whatsappNumber.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');

    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      inquiryType: "product",
      message: "",
      budget: "",
      timeline: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-white">Send Inquiry</h2>
                <p className="text-white/60 text-sm">
                  {productName ? `About: ${productName}` : `To: ${catalogName}`}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
                  placeholder="Enter your email"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-400"
                >
                  <option value="product" className="bg-gray-900">Product Inquiry</option>
                  <option value="quote" className="bg-gray-900">Price Quote</option>
                  <option value="bulk" className="bg-gray-900">Bulk Order</option>
                  <option value="custom" className="bg-gray-900">Custom Design</option>
                  <option value="installation" className="bg-gray-900">Installation Service</option>
                  <option value="general" className="bg-gray-900">General Inquiry</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Budget Range (Optional)
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-400"
                >
                  <option value="" className="bg-gray-900">Select budget range</option>
                  <option value="under-10k" className="bg-gray-900">Under ₹10,000</option>
                  <option value="10k-50k" className="bg-gray-900">₹10,000 - ₹50,000</option>
                  <option value="50k-1l" className="bg-gray-900">₹50,000 - ₹1,00,000</option>
                  <option value="1l-5l" className="bg-gray-900">₹1,00,000 - ₹5,00,000</option>
                  <option value="above-5l" className="bg-gray-900">Above ₹5,00,000</option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Project Timeline (Optional)
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-400"
                >
                  <option value="" className="bg-gray-900">Select timeline</option>
                  <option value="immediate" className="bg-gray-900">Immediate (Within 1 week)</option>
                  <option value="1-month" className="bg-gray-900">Within 1 month</option>
                  <option value="1-3-months" className="bg-gray-900">1-3 months</option>
                  <option value="3-6-months" className="bg-gray-900">3-6 months</option>
                  <option value="exploring" className="bg-gray-900">Just exploring</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400 resize-none"
                  placeholder="Describe your requirements..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </>
                )}
              </Button>

              <p className="text-white/50 text-xs text-center">
                This will open WhatsApp with your inquiry message pre-filled
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}