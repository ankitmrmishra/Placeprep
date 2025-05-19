"use server"

import { z } from "zod"

// Define the schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function sendContactEmail(formData: {
  name: string
  email: string
  subject: string
  message: string
}) {
  // Validate the form data
  const result = contactFormSchema.safeParse(formData)

  if (!result.success) {
    throw new Error("Invalid form data")
  }

  // In a real application, you would use a service like Nodemailer, SendGrid, etc.
  // For now, we'll simulate sending an email

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Log the email data (for demonstration purposes)
  console.log("Email would be sent to: yashkhan4314@gmail.com")
  console.log("From:", formData.name, `<${formData.email}>`)
  console.log("Subject:", formData.subject)
  console.log("Message:", formData.message)

  // In a real application, you would return a success/error response
  return { success: true }
}
