import React from 'react'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        ></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex flex-col items-center">
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/wYUHAHKVzUTNbcDtcHroJi/image.png"
                alt="WiFi Protected"
                className="h-32 w-auto mb-6 object-contain"
              />
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                {title}
              </h3>
              <div className="w-full">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal
