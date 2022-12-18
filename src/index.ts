import { MessageFormatElement } from '@formatjs/icu-messageformat-parser'
import { ref } from 'vue'
import { readonly } from 'vue/types/v3-generated.js'

export type MessagesMap =
  | {
      [Key: string]: string
    }
  | {
      [Key: string]: MessageFormatElement
    }

export function create() {
  const $messages = ref(Object.create(null) as MessagesMap)

  return {
    get messages() {
      return readonly($messages.value)
    },
  }
}
