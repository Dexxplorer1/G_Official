"use server"

export async function submitEstimateForm(formData: FormData) {
  try {
    // Send FormData payload directly to the API route
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-estimate`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      return {
        success: false,
        error: "Failed to send message. Please try again or call us directly.",
      };
    }

    return {
      success: true,
      message: "Your estimate request has been sent! We'll get back to you shortly.",
    };
  } catch (error) {
    console.error("❌ Estimate form submission error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again or call us directly at (239) 486-1170.",
    };
  }
}
