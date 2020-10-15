<template>
  <div>
    <div class="albumGrid ">
      <template v-for="(album, i) in albums" :key="i">
        <album-card :img-src="album.cover" @show-album-modal="toggleAlbumModal(true, i)" />
      </template>
    </div>
    <album-modal
      :show-album-modal="showAlbumModal"
      :selected-album="selectedAlbum"
      @close-album-modal="toggleAlbumModal(false)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AlbumCard from '@/components/AlbumCard.vue';
import AlbumModal from '@/components/AlbumModal.vue';
import useFetch, { FetchResult } from '@/composite/useFetch';

export default defineComponent({
  components: {
    AlbumCard,
    AlbumModal
  },
  setup() {
    const { response: albums, error, fetching }: FetchResult<Record<string, any>[]> = useFetch(
      'https://leodh.dev/citypop/api/albums?limit=18'
    );
    const showAlbumModal = ref(false);
    const selectedAlbum = ref({});
    const toggleAlbumModal = (show: boolean, i?: number) => {
      showAlbumModal.value = show;
      if (show) selectedAlbum.value = (albums.value as Record<string, any>[])[i as number];
    };
    return { albums, error, fetching, showAlbumModal, toggleAlbumModal, selectedAlbum };
  }
});
</script>

<style lang="postcss" scoped>
.albumGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  > :first-child {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }
  > :nth-child(7),
  > :nth-child(13),
  > :nth-child(17) {
    grid-row: span 2;
    grid-column: span 2;
  }
  @screen lg {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(5, 1fr);
    > :nth-child(16) {
      grid-row: span 2;
      grid-column: span 2;
    }
    > :nth-child(17) {
      grid-row: span 1;
      grid-column: span 1;
    }
  }
}
</style>
