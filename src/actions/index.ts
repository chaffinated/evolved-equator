import { defineAction, z } from "astro:actions";


export const server = {
  passthrough: defineAction({
    accept: 'form',
    input: z.object({
      text: z.string().optional(),
    }).passthrough(),
    async handler(input, context) {
      console.log('[text]', input.text);                  // this has a value
      console.log('[additional]', input.additionalText);  // this has no value
      return input;
    },
  }),
};
