<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <the-header as="h2">
          Frequently asked questions
        </the-header>

        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <the-disclosure-item
            v-for="faq in faqs"
            :key="faq.question"
            :title="faq.question"
            :content="faq.answer"
            class="pt-6"
          />
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheDisclosureItem from '@/components/Atoms/items/TheDisclosureItem/TheDisclosureItem.vue'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  }
]
</script>
