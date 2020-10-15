import { reactive, Ref, toRefs } from 'vue';
export default function(url: string, options?: object) {
  const state = reactive({
    response: null,
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
export interface FetchResult<T> {
  response: Ref<null | T>;
  error: Ref<boolean>;
  fetching: Ref<boolean>;
}
