// Telegram functions
const sendTelegramRequest = async (
  token: string,
  endpoint: string,
  params: Record<string, any> = {}
) => {
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
    const data = await response.json()
    if (data) {
      console.log(`${endpoint} sent successfully!`)
      return data
    }
  } catch (error) {
    console.error(`Error sending ${endpoint}:`, error)
    throw error
  }
}

const sendTelegramMessage = async (
  token: string,
  chat_id: string,
  message: string,
  reply_markup = {}
) => {
  const params = {
    chat_id,
    text: message,
    disable_web_page_preview: true,
    reply_markup: JSON.stringify(reply_markup),
    parse_mode: 'HTML',
  }
  return await sendTelegramRequest(token, 'sendMessage', params)
}

const sendTelegramPhoto = async (
  token: string,
  chat_id: string,
  message: string,
  image: string,
  reply_markup: Record<string, any> = {}
) => {
  const params = {
    chat_id,
    photo: image,
    caption: message,
    reply_markup: JSON.stringify(reply_markup),
    parse_mode: 'HTML',
  }
  return await sendTelegramRequest(token, 'sendPhoto', params)
}

const pinTelegramMessage = async (
  token: string,
  chat_id: string,
  message_id: string,
  disable_notification: boolean = false
) => {
  const params = {
    chat_id,
    message_id,
    disable_notification: disable_notification,
  }
  return await sendTelegramRequest(token, 'pinChatMessage', params)
}

export { sendTelegramMessage, sendTelegramPhoto, pinTelegramMessage }
