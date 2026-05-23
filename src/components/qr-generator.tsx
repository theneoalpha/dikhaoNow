"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Share2, Copy, QrCode, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import QRCodeLib from "qrcode";

interface QRGeneratorProps {
  catalogUrl: string;
  businessName: string;
  businessType: string;
  logo?: string;
  customMessage?: string;
}

export function QRGenerator({
  catalogUrl,
  businessName,
  businessType,
  logo,
  customMessage,
}: QRGeneratorProps) {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQRCode = async () => {
    setIsGenerating(true);
    try {
      const qrData = await QRCodeLib.toDataURL(catalogUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: "var(--background)",
          light: "var(--text)",
        },
        errorCorrectionLevel: "M",
      });
      setQrCodeDataUrl(qrData);
    } catch (error) {
      console.error("Error generating QR code:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    generateQRCode();
  }, [catalogUrl]);

  const downloadQR = () => {
    if (!qrCodeDataUrl) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 500;

    // Background
    ctx.fillStyle = "var(--text)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header
    ctx.fillStyle = "var(--background)";
    ctx.fillRect(0, 0, canvas.width, 80);

    // Title
    ctx.fillStyle = "var(--text)";
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Scan for Digital Catalog", canvas.width / 2, 30);
    ctx.font = "14px Arial";
    ctx.fillText("View Our Complete Product Range", canvas.width / 2, 55);

    // Business Info
    ctx.fillStyle = "var(--background)";
    ctx.font = "bold 20px Arial";
    ctx.fillText(businessName, canvas.width / 2, 120);
    ctx.font = "16px Arial";
    ctx.fillStyle = "#666666";
    ctx.fillText(businessType, canvas.width / 2, 145);

    // QR Code
    const qrImg = new Image();
    qrImg.onload = () => {
      ctx.drawImage(qrImg, 50, 170, 300, 300);

      // Footer
      ctx.fillStyle = "var(--background)";
      ctx.font = "12px Arial";
      ctx.fillText(
        "Powered by DikhaoNow Digital Catalogs",
        canvas.width / 2,
        490,
      );

      // Download
      const link = document.createElement("a");
      link.download = `${businessName.replace(/\s+/g, "_")}_QR_Code.png`;
      link.href = canvas.toDataURL();
      link.click();
    };
    qrImg.src = qrCodeDataUrl;
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(catalogUrl);
      alert("Catalog URL copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };

  const shareQR = async () => {
    if (navigator.share && qrCodeDataUrl) {
      try {
        // Convert data URL to blob
        const response = await fetch(qrCodeDataUrl);
        const blob = await response.blob();
        const file = new File([blob], `${businessName}_QR.png`, {
          type: "image/png",
        });

        await navigator.share({
          title: `${businessName} - Digital Catalog`,
          text: `Check out our digital catalog: ${businessName}`,
          files: [file],
        });
      } catch (error) {
        console.log("Error sharing:", error);
        copyUrl(); // Fallback to copying URL
      }
    } else {
      copyUrl(); // Fallback to copying URL
    }
  };

  const printQR = () => {
    if (!qrCodeDataUrl) return;

    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>QR Code - ${businessName}</title>
          <style>
            :root {
              --background: #0F0F0F;
              --text: #FFFFFF;
            }
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              padding: 20px;
              margin: 0;
            }
            .qr-container {
              max-width: 400px;
              margin: 0 auto;
              border: 2px solid var(--background);
              border-radius: 10px;
              padding: 20px;
              background: var(--text);
            }
            .header {
              background: var(--background);
              color: var(--text);
              padding: 15px;
              margin: -20px -20px 20px -20px;
              border-radius: 8px 8px 0 0;
            }
            .business-name {
              font-size: 24px;
              font-weight: bold;
              margin: 10px 0 5px 0;
              color: var(--background);
            }
            .business-type {
              font-size: 16px;
              color: #666;
              margin-bottom: 20px;
            }
            .qr-code {
              margin: 20px 0;
            }
            .instructions {
              font-size: 14px;
              color: #666;
              margin-top: 15px;
              line-height: 1.4;
            }
            .footer {
              font-size: 12px;
              color: #999;
              margin-top: 20px;
              border-top: 1px solid #eee;
              padding-top: 10px;
            }
            @media print {
              body { margin: 0; }
              .qr-container { border: 1px solid #000; }
            }
          </style>
        </head>
        <body>
          <div class="qr-container">
            <div class="header">
              <h2 style="margin: 0;">Scan for Digital Catalog</h2>
              <p style="margin: 5px 0 0 0; font-size: 14px;">View Our Complete Product Range</p>
            </div>
            <div class="business-name">${businessName}</div>
            <div class="business-type">${businessType}</div>
            <div class="qr-code">
              <img src="${qrCodeDataUrl}" alt="QR Code" style="width: 250px; height: 250px;" />
            </div>
            <div class="instructions">
              <strong>How to use:</strong><br>
              1. Open camera app on your phone<br>
              2. Point camera at QR code<br>
              3. Tap the notification to open catalog<br>
              4. Browse our products & contact us via WhatsApp
            </div>
            <div class="footer">
              Powered by DikhaoNow Digital Catalogs<br>
              ${catalogUrl}
            </div>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
    >
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <QrCode className="w-6 h-6 text-purple-400" />
          <h3 className="text-xl font-semibold text-white">
            QR Code for Your Shop
          </h3>
        </div>
        <p className="text-white/70 text-sm">
          Print and display this QR code in your shop for customers to easily
          access your digital catalog
        </p>
      </div>

      {/* QR Code Display */}
      <div className="flex justify-center mb-6">
        {isGenerating ? (
          <div className="w-64 h-64 bg-white/10 rounded-lg flex items-center justify-center">
            <div className="text-white/60">Generating QR Code...</div>
          </div>
        ) : qrCodeDataUrl ? (
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src={qrCodeDataUrl} alt="QR Code" className="w-56 h-56" />
          </div>
        ) : (
          <div className="w-64 h-64 bg-white/10 rounded-lg flex items-center justify-center">
            <div className="text-white/60">Failed to generate QR code</div>
          </div>
        )}
      </div>

      {/* Business Info Preview */}
      <div className="text-center mb-6 p-4 bg-white/5 rounded-lg">
        <h4 className="text-white font-semibold text-lg">{businessName}</h4>
        <p className="text-white/70">{businessType}</p>
        {customMessage && (
          <p className="text-white/60 text-sm mt-2">{customMessage}</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Button
          onClick={downloadQR}
          disabled={!qrCodeDataUrl}
          className="flex items-center gap-2"
          size="sm"
        >
          <Download className="w-4 h-4" />
          Download
        </Button>

        <Button
          onClick={printQR}
          disabled={!qrCodeDataUrl}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Printer className="w-4 h-4" />
          Print
        </Button>

        <Button
          onClick={shareQR}
          disabled={!qrCodeDataUrl}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Share2 className="w-4 h-4" />
          Share
        </Button>

        <Button
          onClick={copyUrl}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Copy className="w-4 h-4" />
          Copy URL
        </Button>
      </div>

      {/* Instructions */}
      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <h5 className="text-blue-400 font-medium mb-2">
          📋 Instructions for Your Shop:
        </h5>
        <ul className="text-blue-300 text-sm space-y-1">
          <li>• Print the QR code and display it prominently in your shop</li>
          <li>• Place it near your product displays or at the counter</li>
          <li>• Tell customers to scan it to see your complete catalog</li>
          <li>
            • They can browse products and contact you directly via WhatsApp
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
