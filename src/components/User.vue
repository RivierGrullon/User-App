<script lang="ts" setup>
defineProps<{ user: any }>();
</script>

<template>
  <div class="border-b border-gray-500 h-auto p-2 flex flex-col">
    <div>
      <span class="font-bold">Name:</span> {{ user?.firstname }}
      {{ user?.lastname }}
    </div>

    <div>
      <span class="font-bold"> ID: </span>

      <span>
        {{ user?.id }}
      </span>
    </div>

    <div>
      <span class="font-bold"> Email: </span>

      <span>
        {{ user?.email }}
      </span>
    </div>

    <div>
      <span class="font-bold"> Company: </span>

      <span>
        {{ user?.default_company }}
      </span>
    </div>

    <div>
      <span class="font-bold"> Created at: </span>

      <span>
        {{ (user?.created_at) }}
      </span>
    </div>
  </div>
</template>