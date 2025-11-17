import './globals.css'

export const metadata = {
  title: 'Alex Chen - AI/ML Developer',
  description: 'Portfolio of an AI/ML Developer specializing in deep learning, computer vision, and intelligent systems',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
