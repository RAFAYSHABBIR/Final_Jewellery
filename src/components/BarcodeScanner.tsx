import React, { useEffect, useState, useRef } from 'react';
import { Html5QrcodeScannerConfig, Html5QrcodeScanner } from 'html5-qrcode';
interface BarcodeScannerProps {
  onScanSuccess: (decodedText: string) => void;
}
const BarcodeScanner: React.FC<BarcodeScannerProps> = ({
  onScanSuccess
}) => {
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const scannerContainerId = 'qr-reader';
  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    };
  }, []);
  const startScanner = () => {
    setIsScanning(true);
    const config: Html5QrcodeScannerConfig = {
      fps: 10,
      qrbox: {
        width: 250,
        height: 250
      },
      rememberLastUsedCamera: true
    };
    scannerRef.current = new Html5QrcodeScanner(scannerContainerId, config, false);
    scannerRef.current.render(decodedText => {
      if (scannerRef.current) {
        scannerRef.current.clear();
        setIsScanning(false);
        onScanSuccess(decodedText);
      }
    }, errorMessage => {
      console.error(errorMessage);
    });
  };
  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.clear();
      setIsScanning(false);
    }
  };
  return <div className="w-full">
      {!isScanning ? <button onClick={startScanner} className="w-full py-3 px-4 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clipRule="evenodd" />
            <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
          </svg>
          Scan to Connect
        </button> : <div className="space-y-4">
          <div id={scannerContainerId}></div>
          <button onClick={stopScanner} className="w-full py-2 px-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors">
            Cancel Scan
          </button>
        </div>}
    </div>;
};
export default BarcodeScanner;