
export const login = async (username: string, password: string) => {
  const res = await fetch(`/api/authenticate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })

  if (!res.ok) {
    throw new Error('Invalid credentials')
  }

  return await res.json() // { token, username }
}

export const fetchWithAuth = async (endpoint: string, method = 'GET', body?: any) => {
  const token = localStorage.getItem('token')

  const res = await fetch(`/api${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: body ? JSON.stringify(body) : undefined
  })

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }

  return await res.json()
}

export const patchContent = async (content: { [key: string]: string }) => {
  const token = localStorage.getItem('token')

  const res = await fetch(`/api/content`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(content)
  })

  if (!res.ok) {
    throw new Error(`Failed to update content: ${res.status}`)
  }

  return await res.json()
}

// Add to your api.ts

export const uploadImage = async (file: File): Promise<{ url: string }> => {
  const token = localStorage.getItem('token')
  const formData = new FormData()
  formData.append('image', file)

  const res = await fetch(`/api/upload-image`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })

  if (!res.ok) {
    throw new Error(`Image upload failed: ${res.status}`)
  }

  return await res.json() // { url }
}
