export const handleCheckout = (location: string) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq('track', 'InitiateCheckout', {
      value: 429,
      currency: 'MXN',
      content_name: '100 Citas Juntos',
      content_type: 'product',
      button_location: location
    });
  }

  setTimeout(() => {
    window.open(
      "https://buy.stripe.com/6oU5kDgum0Si6Z3bRjgjC01",
      "_blank"
    );
  }, 300);
};