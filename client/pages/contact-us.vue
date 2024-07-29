<template>
  <div class="relative isolate">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2">
            <svg
              class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M130 200V.5M.5 .5H200"
                    fill="none"
                  />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="white"
              />
              <svg
                x="100%"
                y="-1"
                class="overflow-visible fill-gray-50"
              >
                <path
                  d="M-470.5 0h201v201h-201Z"
                  stroke-width="0"
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              />
            </svg>
          </div>

          <the-header as="h2">
            Get in touch
          </the-header>

          <the-description class="mt-4">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
          </the-description>

          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <BuildingOffice2Icon
                  class="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>545 Mavis Island<br>Chicago, IL 99191</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon
                  class="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a
                  class="hover:text-gray-900"
                  href="tel:+1 (555) 234-5678"
                >+1 (555) 234-5678</a>
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon
                  class="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a
                  class="hover:text-gray-900"
                  href="mailto:hello@example.com"
                >hello@example.com</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <the-contact-form />
    </div>

<!--    <GMapMap-->
<!--      :center="{ lat: 51.5072, lng: 0.1276 }"-->
<!--      :zoom="10"-->
<!--      map-type-id="terrain"-->
<!--      style="width: 100%; height: 600px;"-->
<!--      :options="{-->
<!--        zoomControl: true,-->
<!--        mapTypeControl: true,-->
<!--        scaleControl: true,-->
<!--        streetViewControl: true,-->
<!--        rotateControl: true,-->
<!--        fullscreenControl: true-->
<!--      }"-->
<!--    />-->
  </div>
</template>

<script setup>
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
// import GMapMap from '@fawmi/vue-google-maps/src/components/map.vue'
import TheHeader from '@/components/Atoms/typography/TheHeader/TheHeader.vue'
import TheDescription from '@/components/Atoms/typography/TheDescription/TheDescription.vue'
import TheContactForm from '@/components/Organisms/forms/TheContactForm.vue'

// noinspection TypeScriptUnresolvedFunction
definePageMeta({
  layout: 'contact'
})
</script>
