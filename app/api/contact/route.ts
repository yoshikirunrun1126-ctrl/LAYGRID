import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  const origin = new URL(request.url).origin
  const successUrl = `${origin}/?submitted=contact#contact`
  const errorUrl = `${origin}/?contact_error=1#contact`

  if (!accessKey) {
    console.error('WEB3FORMS_ACCESS_KEY is not configured')
    return NextResponse.redirect(errorUrl, 303)
  }

  const formData = await request.formData()
  const botcheck = formData.get('botcheck')

  if (botcheck) {
    return NextResponse.redirect(successUrl, 303)
  }

  const name = formData.get('name')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const message = formData.get('message')?.toString().trim()
  const company = formData.get('company')?.toString().trim()

  if (!name || !email || !message) {
    return NextResponse.redirect(errorUrl, 303)
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        company: company || '（未入力）',
        subject: 'LAYGRID お問い合わせ',
        from_name: 'LAYGRID Website',
      }),
    })

    const data = (await response.json()) as { success?: boolean }

    if (data.success) {
      return NextResponse.redirect(successUrl, 303)
    }
  } catch (error) {
    console.error('Contact form submission failed:', error)
  }

  return NextResponse.redirect(errorUrl, 303)
}
