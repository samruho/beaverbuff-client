// src/hooks/useContent.ts
import { useContext, useEffect, useState } from 'react'
import { fetchWithAuth } from '../utils/api'
import { EditContext } from '../context/EditContext'

const pageCache: Record<string, Record<string, string>> = {}
const fetchedPages = new Set<string>()

export function useContent(contentKey: string) {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(true)
  const { setUnsavedChanges } = useContext(EditContext)

  useEffect(() => {
    const [page] = contentKey.split('.')

    const load = async () => {
      if (pageCache[page] && pageCache[page][contentKey]) {
        setValue(pageCache[page][contentKey])
        setLoading(false)
        return
      }

      if (!fetchedPages.has(page)) {
        const res = await fetchWithAuth(`/content/${page}`, 'GET')
        const content = res.content || {}

        pageCache[page] = content
        fetchedPages.add(page)
      }

      setValue(pageCache[page][contentKey] || '')
      setLoading(false)
    }

    load()
  }, [contentKey])

  const update = (newValue: string) => {
    setValue(newValue)
  
    const [page] = contentKey.split('.')
    if (!pageCache[page]) pageCache[page] = {}
    pageCache[page][contentKey] = newValue
  
    // ✅ push to unsavedChanges context
    setUnsavedChanges(prev => ({ ...prev, [contentKey]: newValue }))
  }

  return {
    value,
    setValue: update,
    loading,
  }
}
