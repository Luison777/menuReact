import '@/app/globals.css'
export const metadata = {
  title: 'Admin Page',
  description: 'Only for Casa Mexicana Admins',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="w-full h-full">{children}</body>
    </html>
  )
}
