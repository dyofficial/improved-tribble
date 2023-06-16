const openai = require("../config/openaiConfig");

const generateMeta = async (title) => {
  const desc = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Come up with a description for YouTube video called ${title}`,
      },
    ],
    max_tokens: 100,
  });
  console.log(desc.data.choices[0].message);
};
module.exports = { generateMeta };
