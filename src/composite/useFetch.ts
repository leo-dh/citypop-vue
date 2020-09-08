import { reactive, toRefs } from 'vue';
export default function(url: string, options?: object) {
  const state = reactive({
    response: [],
    error: false,
    fetching: true
  });
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      state.response = data;
      state.fetching = false;
    })
    .catch(() => {
      state.error = true;
    });
  return toRefs(state);
}
