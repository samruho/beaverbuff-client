// src/hooks/useContent.ts
import { useContext, useEffect, useState } from 'react'
import { fetchWithAuth } from '../utils/api'
import { EditContext } from '../context/EditContext'

const pageCache: Record<string, Record<string, string>> = {}
const fetchedPages = new Set<string>()

export function useContent(contentKey: string) {
  const [value, setValue] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const { setUnsavedChanges } = useContext(EditContext)

  const [hasValue, setHasValue] = useState(false)

  useEffect(() => {
    const [page] = contentKey.split('.')

    const load = async () => {
      if (pageCache[page] && contentKey in pageCache[page]) {
        const cached = pageCache[page][contentKey]
        setValue(cached)
        setHasValue(true)
        setLoading(false)
        return
      }

      if (!fetchedPages.has(page)) {
        const res = await fetchWithAuth(`/content/${page}`, 'GET')
        const content = res.content || {}

        pageCache[page] = content
        fetchedPages.add(page)
      }

      if (contentKey in pageCache[page]) {
        setValue(pageCache[page][contentKey])
        setHasValue(true)
      } else {
        setValue('')
        setHasValue(false)
      }

      setLoading(false)
    }

    load()
  }, [contentKey])

  const update = (newValue: string) => {
    setValue(newValue)

    const [page] = contentKey.split('.')
    if (!pageCache[page]) pageCache[page] = {}
    pageCache[page][contentKey] = newValue

    setUnsavedChanges(prev => ({ ...prev, [contentKey]: newValue }))
    setHasValue(true)
  }

  return {
    value,
    hasValue,
    setValue: update,
    loading,
  }
}