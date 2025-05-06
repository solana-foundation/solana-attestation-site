const longFormatter = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' })

export const formatDateShort = (date: Date): string => date.toISOString().slice(0, 10)

export const formatDateLong = (date: Date): string => longFormatter.format(date)
