import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export async function generateImagePrompt(prompt: string){
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an ccreative and helpful AI assistance capable of generating intersting thumbnail descriptions for my notes, your output will be fed into the DALLE API to generate a thumbnail. The desciption should be minimalistic and flat styled'

        },
        {
          role: 'user',
          content: 'PLease generate a thumbnail description for my notebook titles ${name}'
        }
      ]
    })
    const data = await response.json()
    const image_description = data.choices[0].message.content
    return image_description as string
  } catch (error) {
      console.log(error);
      throw error
  }
}

export async function generateImage() {

}