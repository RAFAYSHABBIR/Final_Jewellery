import React from 'react'
interface MainServicePageProps {
  setHasPurchased: (value: boolean) => void
}
const MainServicePage: React.FC<MainServicePageProps> = ({
  setHasPurchased,
}) => {
  const handleVisitWebsite = () => {
    window.open('https://hydeparkdesign.com', '_blank')
  }
  const handleLeaveReview = () => {
    window.open(
      'https://www.google.com/search?sca_esv=e4e3b1ba951674fc&rlz=1C1CHBF_enPK1085PK1085&sxsrf=AE3TifM6r7R7HDkhVRqVIlto7XE5uJlEEA:1761055604964&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s4FGKLSsFGcPOmu2AyfyzLMi2T1f1j9sX8ci259lK9JreplVB5PEoEo8W81KxrIoRtQ3iFIJ7MWbN2_hcJPGNPzmwfWMG_bcuyVbvYaMG3s0-GtKqhUjU0ZpAswJIdnQS93CtMc1Cb0QuERA2qLqvPdwl-3g&q=Hyde+Park+Design+%7C+Bespoke+Jewellers+Hatton+Garden+Reviews&sa=X&ved=2ahUKEwit1I2uu7WQAxXSdUEAHTZbEYsQ0bkNegQINBAE&biw=1536&bih=730&dpr=1.25',
      '_blank',
    )
  }
  return (
    <div className="w-full min-h-screen bg-slate-900">
      <div className="bg-slate-800 shadow-md px-6 py-4 flex justify-between items-center border-b border-slate-700">
        <div>
          <h1 className="text-xl font-bold text-white">Hyde Park Design</h1>
          <p className="text-sm text-slate-300">
            Bespoke Jewellers Hatton Garden
          </p>
        </div>
        <button
          onClick={handleLeaveReview}
          className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors shadow-lg flex items-center space-x-2"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>Leave a Review</span>
        </button>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
          <div className="bg-slate-700 px-8 py-12 text-white text-center">
            <svg
              className="h-16 w-16 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <h2 className="text-3xl font-bold mb-2">
              Welcome to Hyde Park Design
            </h2>
            <p className="text-slate-300 text-lg">
              Exquisite Bespoke Jewellery in Hatton Garden
            </p>
          </div>
          <div className="p-8">
            <div className="bg-slate-700 border-l-4 border-slate-500 p-6 mb-6">
              <div className="flex items-start">
                <svg
                  className="h-6 w-6 text-slate-300 mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Visit Our Complete Website
                  </h3>
                  <p className="text-slate-300 text-sm">
                    To explore our full collection, view detailed product
                    information, and browse our bespoke jewellery services,
                    please visit our official website.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500 mr-3"
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
                <span className="text-slate-300">
                  Browse our exclusive jewellery collections
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500 mr-3"
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
                <span className="text-slate-300">
                  Discover our bespoke design services
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500 mr-3"
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
                <span className="text-slate-300">
                  View detailed product specifications
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500 mr-3"
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
                <span className="text-slate-300">
                  Complete your purchase securely
                </span>
              </div>
            </div>
            <button
              onClick={handleVisitWebsite}
              className="w-full px-8 py-4 bg-slate-600 text-white font-bold text-lg rounded-xl hover:bg-slate-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-3"
            >
              <span>Click Here to Visit Our Complete Website</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
            <p className="text-center text-sm text-slate-400 mt-4">
              Opens in a new window • Secure connection
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-400">
          <p className="text-sm">
            Enjoyed our service? Click the "Leave a Review" button above to
            share your experience
          </p>
        </div>
      </div>
    </div>
  )
}
export default MainServicePage
