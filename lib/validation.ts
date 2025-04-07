export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

export function validateContactForm(data: {
  name: string
  email: string
  message: string
}): ValidationResult {
  const errors: Record<string, string> = {}

  // Validate name
  if (!data.name.trim()) {
    errors.name = "Name is required"
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters"
  }

  // Validate email
  if (!data.email.trim()) {
    errors.email = "Email is required"
  } else if (!isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address"
  }

  // Validate message
  if (!data.message.trim()) {
    errors.message = "Message is required"
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters"
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

