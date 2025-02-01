"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function PaymentIcons() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const paypalLogo =
    theme === "dark" ? "/svg/paypal-light.svg" : "/svg/paypal-dark.svg";
  const mastercardLogo =
    theme === "dark" ? "/svg/mastercard-light.svg" : "/svg/mastercard-dark.svg";
  const visaLogo =
    theme === "dark" ? "/svg/visa-light.svg" : "/svg/visa-dark.svg";

  return (
    <div className="flex items-center justify-center gap-4">
      <Image src={paypalLogo} alt="PayPal logo" width={56} height={14} />
      <Image
        src={mastercardLogo}
        alt="MasterCard logo"
        width={32}
        height={20}
      />
      <Image src={visaLogo} alt="Visa logo" width={32} height={12} />
    </div>
  );
}
