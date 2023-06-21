interface SuccessResponse {
  success: true
  data: any
}

interface ErrorResponse {
  success: false
  error: {
    message: string
  }
  statusCode: number
}

export function successResponse(data: any): SuccessResponse {
  return {
    success: true,
    data,
  }
}

export function errorResponse(
  message: string,
  statusCode = 500,
): ErrorResponse {
  return {
    success: false,
    error: {
      message,
    },
    statusCode,
  }
}
