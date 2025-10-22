import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BarcodeScanner from '../components/BarcodeScanner'
import Modal from '../components/Modal'
interface WelcomePageProps {
  setIsAuthenticated: (value: boolean) => void
}
const WelcomePage: React.FC<WelcomePageProps> = ({ setIsAuthenticated }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showSecureModal, setShowSecureModal] = useState(false)
  const navigate = useNavigate()
  const handleScanSuccess = (decodedText: string) => {
    authenticateUser(decodedText)
  }
  const authenticateUser = (code: string) => {
    setShowSuccessModal(true)
    setTimeout(() => {
      setShowSuccessModal(false)
      setShowSecureModal(true)
      setTimeout(() => {
        setIsAuthenticated(true)
        setShowSecureModal(false)
        navigate('/main')
      }, 2000)
    }, 1500)
  }
  const handleDemoLogin = () => {
    setShowSuccessModal(true)
    setTimeout(() => {
      setShowSuccessModal(false)
      setShowSecureModal(true)
      setTimeout(() => {
        setIsAuthenticated(true)
        setShowSecureModal(false)
        navigate('/main')
      }, 2000)
    }, 1500)
  }
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 px-6 py-8 text-center">
          <img
            src="https://uploadthingy.s3.us-west-1.amazonaws.com/hP4KBzn8GTUPQkUCPudXkY/logo2.png"
            alt="Hyde Park Design Logo"
            className="h-20 mx-auto mb-4 object-contain"
          />
          <h1 className="text-2xl font-bold text-white">
            Welcome to Hyde Park Design
          </h1>
          <p className="text-gray-200 mt-2">Bespoke Jewellers Hatton Garden</p>
        </div>
        <div className="px-6 py-8">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Our Story. Our Heritage. Our Family's Passion
            </h2>
            <p className="text-gray-600 mb-6">
              Crafted into every piece of fine jewellery we create. Scan the QR
              code to explore our collection.
            </p>
          </div>
          <div className="space-y-4">
            <BarcodeScanner onScanSuccess={handleScanSuccess} />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>
            <button
              onClick={handleDemoLogin}
              className="w-full py-3 px-4 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors"
            >
              Demo Access
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Connection Successful"
      >
        <div className="text-center py-4">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Successfully Connected!
          </h3>
          <div className="mt-4 flex justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-800"></div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={showSecureModal}
        onClose={() => setShowSecureModal(false)}
        title="Secure Connection Established"
      >
        <div className="text-center py-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Your Connection is Secure
          </h3>
          <p className="text-gray-600 mb-4">
            You can now safely browse our exclusive jewellery collection
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Protected Connection</span>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-800"></div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
export default WelcomePage
