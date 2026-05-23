"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface WhatsAppWidgetProps {
  phoneNumber: string;
  businessName?: string;
  welcomeMessage?: string;
}

export function WhatsAppWidget({ 
  phoneNumber, 
  businessName = "Business",
  welcomeMessage = "Hi! How can we help you today?"
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const text = message.trim() || "Hi! I'm interested in your services.";
    const encodedMessage = encodeURIComponent(text);
    window.open(`https://wa.me/91${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');
    setMessage("");
    setIsOpen(false);
  };

  const quickMessages = [
    "I'm interested in your products",
    "Can you share your catalog?",
    "What are your working hours?",
    "I need a price quote",
  ];

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-green-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{businessName}</h3>
                  <p className="text-green-100 text-sm">Typically replies instantly</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="p-4 border-b border-white/10">
              <div className="bg-white/5 rounded-lg p-3 text-white text-sm">
                {welcomeMessage}
              </div>
            </div>

            {/* Quick Messages */}
            <div className="p-4 space-y-2">
              <p className="text-white/70 text-sm mb-3">Quick messages:</p>
              {quickMessages.map((quickMsg, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(quickMsg)}
                  className="block w-full text-left p-2 text-sm text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {quickMsg}
                </button>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 text-sm focus:outline-none focus:border-green-400"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg relative"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Notification Dot */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          )}
        </Button>
      </motion.div>
    </>
  );
}