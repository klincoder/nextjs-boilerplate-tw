// Import resources
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

// Import custom files
import tw from "../styles/twStyles";
import { otpTimerAtom } from "../recoil/atoms";

// Component
function ResendOtp({ divClass, onResendOtp, onCancel }) {
  // Define atom
  const [otpTimer, setOtpTimer] = useRecoilState(otpTimerAtom);

  // Debug
  //console.log("Debug resendOtp: ",)

  // SIDE EFFECTS
  // CREATE OTP TIMER
  useEffect(() => {
    // If empty args, return
    if (otpTimer < 1) return;
    // Get timer
    const timer =
      otpTimer > 0 && setInterval(() => setOtpTimer(otpTimer - 1), 1000);
    // Debug
    //console.log("Debug timerInterval: ", otpTimer);
    // Clean up
    return () => clearInterval(timer);
  }, [otpTimer]);

  // Return component
  return (
    <div className={`mt-4 font-semibold ${divClass}`}>
      {/** If otpTimer > 0 */}
      {otpTimer > 0 ? (
        <p className="text-sm text-primary text-center">
          Resend OTP in {otpTimer}s
        </p>
      ) : (
        // Resend otp or cancel
        <div className="flex items-center justify-between">
          {/** Resend otp */}
          <div
            onClick={onResendOtp} //async () => await handleResendOtp()
            className="text-base text-primary underline cursor-pointer"
          >
            Resend OTP
          </div>
          {/** Cancel */}
          <div
            className="text-base text-gray-400 underline cursor-pointer"
            onClick={onCancel}
          >
            Cancel
          </div>
        </div>
      )}
    </div>
  ); // close return
} // close component

// Export
export default ResendOtp;
